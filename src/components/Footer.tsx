import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__text">{t('footer.built')}</span>
          <span className="footer__text" aria-label={`Copyright ${t('footer.year')}`}>
            &copy;&thinsp;{t('footer.year')}
          </span>
        </div>
      </div>
    </footer>
  )
}
