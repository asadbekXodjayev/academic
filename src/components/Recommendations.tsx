import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { RECOMMENDATIONS } from '../data/recommendations'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Recommendations() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="recommendations"
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="rec-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('rec.section_label')}</span>
          <span className="section__index" aria-hidden="true">05</span>
        </div>
        <h2 id="rec-heading" className="section__heading">{t('rec.heading')}</h2>

        <div className="rec-list">
          {RECOMMENDATIONS.map((rec) => (
            <motion.article
              key={rec.id}
              className="rec-card"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              aria-label={`Recommendation from ${rec.recommenderName}`}
            >
              <div className="rec-card__header">
                <time className="rec-card__date" dateTime={rec.date}>{rec.date}</time>
                <a
                  href={rec.pdfPath}
                  className="rec-card__pdf-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('rec.view_letter')} — PDF, opens in new tab`}
                >
                  <span aria-hidden="true">&#x21D7;</span>
                  {t('rec.view_letter')}
                </a>
              </div>

              <blockquote className="rec-card__quote">
                &ldquo;{rec.excerpt}&rdquo;
              </blockquote>

              <hr className="rec-card__rule" aria-hidden="true" />

              <div className="rec-card__recommender">
                <div className="rec-card__recommender-left">
                  <p className="rec-card__name">{rec.recommenderName}</p>
                  <p className="rec-card__creds">{rec.credentials}</p>
                  <p className="rec-card__role">{rec.role}</p>
                  <p className="rec-card__institution">{rec.institution}</p>
                  <p className="rec-card__address">{rec.address}</p>
                  <p className="rec-card__contact">{rec.contact}</p>
                </div>
                <div className="rec-card__context" aria-label="Course context">
                  <div className="rec-card__context-item">
                    <span className="rec-card__context-label">{t('rec.course')}</span>
                    <span className="rec-card__context-value">{rec.course}</span>
                  </div>
                  <div className="rec-card__context-item">
                    <span className="rec-card__context-label">{t('rec.semester')}</span>
                    <span className="rec-card__context-value">{rec.semester}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
