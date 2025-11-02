import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
    fallback: ['Inter', 'sans-serif'],
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '700'],
    style: ['normal'],
    fallback: ['Lato', 'sans-serif'],
})

export const metadata: Metadata = {
    title: 'PaperLess Hub',
    description: 'Let all your documents be paperless.',
    keywords: ['paperless', 'documents', 'hub'],
    authors: [{ name: 'PaperLess Team', url: 'https://paperlesshub.com' }],
    openGraph: {
        title: 'PaperLess Hub',
        description: 'Let all your documents be paperless.',
        url: 'https://paperlesshub.com',
        siteName: 'PaperLess Hub',
        // images: [
        //     {
        //         url: 'https://paperlesshub.com/og-image.png',
        //         width: 1200,
        //         height: 630,
        //         alt: 'PaperLess Hub',
        //     },
        // ],
        locale: 'pt_BR',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${lato.variable} ${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
