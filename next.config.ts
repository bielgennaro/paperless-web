import type { NextConfig } from 'next'
import { i18n } from './next-i18next.config'

const nextConfig: NextConfig = {
    i18n,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
