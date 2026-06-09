import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { EMAIL, SOCIAL_LINKS } from '../data/content'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="contact"
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('contact.section_label')}</span>
          <span className="section__index" aria-hidden="true">07</span>
        </div>
        <h2 id="contact-heading" className="section__heading">{t('contact.heading')}</h2>

        <div className="contact__inner">
          <p className="contact__intro">{t('contact.intro')}</p>

          <div className="contact__email-wrap">
            <p className="contact__email-label">{t('contact.email_label')}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="contact__email"
              aria-label={`Send email to ${EMAIL}`}
            >
              {EMAIL}
            </a>
          </div>

          <p className="contact__socials-label" id="socials-label">{t('contact.profiles_label')}</p>
          <nav className="contact__socials" aria-labelledby="socials-label">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.key}
                href={s.url}
                className="contact__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t(`contact.${s.key}`)} — opens in new tab`}
              >
                {t(`contact.${s.key}`)}
                <span className="contact__social-arrow" aria-hidden="true">&#x2197;</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.section>
  )
}
