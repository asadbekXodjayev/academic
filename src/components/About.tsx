import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const META_KEYS = ['location', 'institution', 'goal', 'exp'] as const

export default function About() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="about"
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('about.section_label')}</span>
          <span className="section__index" aria-hidden="true">01</span>
        </div>
        <h2 id="about-heading" className="section__heading">{t('about.heading')}</h2>

        <div className="about__grid">
          <blockquote className="about__pull" aria-hidden="true">
            {t('about.pull_quote')}
          </blockquote>

          <div className="about__bio">
            <p>{t('about.bio_1')}</p>
            <p>{t('about.bio_2')}</p>
          </div>

          <dl className="about__meta">
            {META_KEYS.map((key) => (
              <div key={key} className="about__meta-item">
                <dt className="about__meta-label">{t(`about.meta_${key}`)}</dt>
                <dd className="about__meta-value">{t(`about.meta_${key}_value`)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.section>
  )
}
