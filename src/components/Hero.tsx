import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { CV_PATH, SOCIAL_LINKS } from '../data/content'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.hr
          className="hero__top-rule"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="hero__grid"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero__name" variants={fadeUp}>
            Asadbek
            <br />
            Xodjayev
          </motion.h1>

          <motion.div className="hero__info" variants={fadeUp}>
            <p className="hero__role">{t('hero.role')}</p>
            <p className="hero__tagline">{t('hero.tagline')}</p>
            <div className="hero__links">
              <a href="#research" className="hero__cta">
                <span className="hero__cta-arrow" aria-hidden="true">&#x2192;</span>
                {t('hero.cta_research')}
              </a>
              <a
                href={CV_PATH}
                className="hero__cta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t('hero.cta_cv')} — PDF, opens in new tab`}
              >
                <span className="hero__cta-arrow" aria-hidden="true">&#x2193;</span>
                {t('hero.cta_cv')}
              </a>
              <a href="#contact" className="hero__cta">
                <span className="hero__cta-arrow" aria-hidden="true">&#x2192;</span>
                {t('hero.cta_contact')}
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__bottom"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="hero__location">{t('hero.location')}</span>
          <div className="hero__quick-links" aria-label="Social links">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.key}
                href={s.url}
                className="hero__quick-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} — opens in new tab`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
