import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { type Lang, DEFAULT_LANG, isValidLang } from '../i18n'

type AppState = {
  lang: Lang
  activeSection: string
  setLang: (lang: Lang) => void
  setActiveSection: (section: string) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        lang: DEFAULT_LANG,
        activeSection: 'hero',
        setLang: (lang) => set({ lang }, false, 'setLang'),
        setActiveSection: (activeSection) =>
          set({ activeSection }, false, 'setActiveSection'),
      }),
      {
        name: 'portfolio-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (s) => ({ lang: s.lang }),
        onRehydrateStorage: () => (state) => {
          if (state && !isValidLang(state.lang)) {
            state.lang = DEFAULT_LANG
          }
        },
        version: 1,
      }
    ),
    { name: 'PortfolioStore' }
  )
)
