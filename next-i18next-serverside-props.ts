import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import config from './next-i18next.config'

export async function getServerSideProps(ctx: any) {
    return {
        props: {
            ...(await serverSideTranslations(ctx.locale, ['common', 'home'], config)),
        },
    }
}
