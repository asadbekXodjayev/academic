import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { CONTRIBUTIONS, MATHGEN } from '../data/research'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const staggerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Research() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="research"
      className="section section--alt"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="research-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('research.section_label')}</span>
          <span className="section__index" aria-hidden="true">02</span>
        </div>
        <h2 id="research-heading" className="section__heading">{t('research.heading')}</h2>

        <div className="research__layout">

          {/* Left: the MathGen study */}
          <article className="research__feature" aria-labelledby="mathgen-title">
            <p className="research__kicker">{t('research.kicker')}</p>
            <h3 id="mathgen-title" className="research__title">{t('research.title')}</h3>
            <p className="research__subtitle">{t('research.subtitle')}</p>
            <p className="research__summary">{t('research.summary')}</p>

            <div>
              <h4 className="academic__block-label">{t('research.findings_label')}</h4>
              <ul className="research__findings">
                {MATHGEN.findingKeys.map((key) => (
                  <li key={key} className="research__finding">{t(`research.finding_${key}`)}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="academic__block-label">{t('research.stats_label')}</h4>
              <dl className="research__stats">
                {MATHGEN.stats.map((s) => (
                  <div key={s.key} className="research__stat">
                    <dt className="research__stat-label">{t(`research.stat_${s.key}`)}</dt>
                    <dd className="research__stat-value">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="research__note">{t('research.note')}</p>
            </div>

            <ul className="project-card__tags" aria-label="Methods and tools">
              {MATHGEN.tech.map((tag) => (
                <li key={tag} className="project-card__tag">{tag}</li>
              ))}
            </ul>

            <a
              href={MATHGEN.repoUrl}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('research.link_repo')} — GitHub (opens in new tab)`}
            >
              <span aria-hidden="true">&#x2192;</span>
              {t('research.link_repo')}
            </a>
          </article>

          {/* Right: merged open-source contributions */}
          <div className="research__side">
            <h3 className="academic__block-label">{t('research.oss_label')}</h3>
            <motion.ul
              className="research-list"
              variants={staggerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-5%' }}
            >
              {CONTRIBUTIONS.map((c) => (
                <motion.li key={c.id} className="research-item" variants={itemVariant}>
                  <a
                    href={c.url}
                    className="research-item__area research-item__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.repo}, pull request ${c.pr} (opens in new tab)`}
                  >
                    {c.repo} · PR #{c.pr}
                  </a>
                  <span className="research-item__desc">{t(c.descKey)}</span>
                  <span className="research-item__meta">
                    {t('research.merged')} <time dateTime={c.merged}>{c.merged}</time>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
