import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { PROJECTS, PROJECTS_PER_PAGE } from '../data/content'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(PROJECTS_PER_PAGE)

  const shown = PROJECTS.slice(0, visible)
  const hasMore = visible < PROJECTS.length

  const loadMore = () => {
    setVisible((v) => Math.min(v + PROJECTS_PER_PAGE, PROJECTS.length))
  }

  return (
    <motion.section
      id="work"
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      aria-labelledby="work-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('work.section_label')}</span>
          <span className="section__index" aria-hidden="true">04</span>
        </div>
        <h2 id="work-heading" className="section__heading">{t('work.heading')}</h2>

        <div className="work__grid" role="list">
          <AnimatePresence initial={false}>
            {shown.map((project, i) => (
              <motion.article
                key={project.id}
                className="project-card"
                variants={cardItem}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                role="listitem"
                layout
              >
                <span className="project-card__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{t(project.descKey)}</p>
                <ul className="project-card__tags" aria-label="Technologies used">
                  {project.tech.map((tag) => (
                    <li key={tag} className="project-card__tag">{tag}</li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('work.live')} — ${project.title} (opens in new tab)`}
                >
                  <span aria-hidden="true">&#x2192;</span>
                  {t('work.live')}
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="work__more">
            <button className="work__more-btn" onClick={loadMore}>
              {t('work_more')}
              <span aria-hidden="true" className="work__more-icon">+</span>
            </button>
          </div>
        )}
      </div>
    </motion.section>
  )
}
