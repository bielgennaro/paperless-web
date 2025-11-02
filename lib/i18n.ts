import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const isDevelopment = process.env.NODE_ENV === 'development'

if (typeof window !== 'undefined' && !i18next.isInitialized) {
    i18next
        .use(HttpBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            backend: {
                loadPath: `${window.location.origin}/locales/{{lng}}/{{ns}}.json`,
            },
            fallbackLng: 'pt-BR',
            defaultNS: 'common',
            ns: ['common', 'home'],
            detection: {
                order: ['localStorage', 'navigator'],
                caches: ['localStorage'],
                lookupLocalStorage: 'i18nextLng',
                lookupCookie: 'i18next',
            },
            interpolation: {
                escapeValue: false,
            },
            debug: isDevelopment,
            load: 'currentOnly',
            react: {
                useSuspense: false,
            },
        })
}

export default i18next
