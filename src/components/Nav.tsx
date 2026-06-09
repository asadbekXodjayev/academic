import { Fragment, useEffect, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useAppStore } from '../store/useAppStore'
import { SUPPORTED_LANGS, type Lang } from '../i18n'

const NAV_LINKS = ['about', 'academic', 'skills', 'work', 'contact'] as const

export default function Nav() {
  const { t, i18n } = useTranslation()
  const lang = useAppStore((s) => s.lang)
  const setLang = useAppStore((s) => s.setLang)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 24))
  }, [scrollY])

  const handleLangChange = (l: Lang) => {
    setLang(l)
    i18n.changeLanguage(l)
  }

  return (
    <motion.header
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      role="banner"
    >
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand" aria-label="Asadbek Xodjayev — Home">
          A.&thinsp;Xodjayev
        </a>

        <nav className="nav__links" aria-label="Site navigation">
          {NAV_LINKS.map((key) => (
            <a key={key} href={`#${key}`} className="nav__link">
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="nav__lang" role="group" aria-label="Language selector">
          {SUPPORTED_LANGS.map((l, i) => (
            <Fragment key={l}>
              {i > 0 && <span className="nav__lang-sep" aria-hidden="true">|</span>}
              <button
                className={`nav__lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => handleLangChange(l)}
                aria-pressed={lang === l}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
