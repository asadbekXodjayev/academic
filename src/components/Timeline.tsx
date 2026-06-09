import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { TIMELINE_COUNT } from '../data/content'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Timeline() {
  const { t } = useTranslation()
  const indices = Array.from({ length: TIMELINE_COUNT }, (_, i) => i)

  return (
    <motion.section
      id="timeline"
      className="section section--alt"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="timeline-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('timeline.section_label')}</span>
          <span className="section__index" aria-hidden="true">05</span>
        </div>
        <h2 id="timeline-heading" className="section__heading">{t('timeline.heading')}</h2>

        <motion.ol
          className="timeline"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          aria-label="Career timeline"
        >
          {indices.map((i) => (
            <motion.li key={i} className="timeline__item" variants={itemVariant}>
              <time className="timeline__year" dateTime={t(`timeline.item_${i}_year`)}>
                {t(`timeline.item_${i}_year`)}
              </time>
              <div className="timeline__marker" aria-hidden="true">
                <div className="timeline__dot" />
                {i < TIMELINE_COUNT - 1 && <div className="timeline__line" />}
              </div>
              <div className="timeline__content">
                <h3 className="timeline__title">{t(`timeline.item_${i}_title`)}</h3>
                <p className="timeline__desc">{t(`timeline.item_${i}_desc`)}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </motion.section>
  )
}
