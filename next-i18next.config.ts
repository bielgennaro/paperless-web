import type { Config } from 'next-i18next'

const config: Config = {
    i18n: {
        defaultLocale: 'pt-BR',
        locales: ['en-US', 'pt-BR', 'es-ES'],
    },
    ns: ['common', 'home'],
    defaultNS: 'common',
    localePath: './public/locales',
    keySeparator: '.',
    nsSeparator: ':',
}

export default config
