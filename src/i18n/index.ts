import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const SUPPORTED_LANGS = ['en', 'ru', 'uz'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]
export const DEFAULT_LANG: Lang = 'en'

export function isValidLang(v: unknown): v is Lang {
  return SUPPORTED_LANGS.includes(v as Lang)
}

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [...SUPPORTED_LANGS],
    fallbackLng: DEFAULT_LANG,
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio_lang',
    },
  })

export default i18n
