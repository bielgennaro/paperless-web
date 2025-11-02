'use client'

import { ArrowRightIcon, FileXIcon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { container, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, hoverScale, item, scaleIn } from '@/lib/animations'
import { Card } from './components/Card'
import features from './utils/features'
import '@/lib/i18n'

const locales = ['en-US', 'pt-BR', 'es-ES']

export default function Home() {
    const { t, i18n } = useTranslation(['common', 'home'])

    const imageSrc = 'https://images.unsplash.com/photo-1758518727600-2c5f48419eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzYxMzI1MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'

    return (
        <div className="min-h-screen bg-white">
            <motion.header
                className="border-b border-neutral-200"
                {...fadeInDown}
            >
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <motion.div
                            className="flex mr-20 items-center gap-4"
                            {...fadeInLeft}
                        >
                            <motion.div {...hoverScale}>
                                <FileXIcon weight="duotone" className="w-8 h-8 text-neutral-900" />
                            </motion.div>
                            <span className="text-xl font-bold text-neutral-900">
                                {t('common:logo')}
                            </span>
                        </motion.div>

                        <motion.nav
                            className="hidden md:flex items-center gap-8"
                            {...scaleIn}
                        >
                            {[t('common:features'), t('common:templates'), t('common:benefits')].map((text, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    className="text-sm text-neutral-600 hover:text-neutral-900 transition"
                                    whileHover={{ y: -2 }}
                                >
                                    {text}
                                </motion.a>
                            ))}
                        </motion.nav>

                        <motion.div
                            className="flex items-center"
                            {...fadeInRight}
                        >
                            <div className="flex items-center gap-4">
                                <motion.div {...hoverScale}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                    >
                                        {t('common:login')}
                                    </Button>
                                </motion.div>
                                <motion.div
                                    {...hoverScale}
                                    className="mr-10"
                                >
                                    <Button
                                        variant="default"
                                        size="sm"
                                    >
                                        {t('common:startFree')}
                                    </Button>
                                </motion.div>
                                {locales.map((loc, idx) => (
                                    <motion.div
                                        key={loc}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            onClick={() => i18n.changeLanguage(loc)}
                                            variant={i18n.language === loc ? 'default' : 'outline'}
                                            size="default"
                                        >
                                            {loc === 'en-US' ? 'EN' : loc === 'pt-BR' ? 'PT' : 'ES'}
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            <motion.section
                className="py-12 md:py-20"
                {...fadeInUp}
            >
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div
                            className="flex flex-col justify-center"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
                                variants={item}
                            >
                                {t('home:hero.title')}
                            </motion.h2>
                            <motion.p
                                className="text-lg text-muted-foreground leading-relaxed mb-8"
                                variants={item}
                            >
                                {t('home:hero.description')}
                            </motion.p>
                            <motion.div
                                className="flex gap-4 border-b border-neutral-200 pb-25"
                                variants={item}
                            >
                                <motion.button {...hoverScale}>
                                    <Button variant="default" size="default">
                                        {t('home:hero.buttons.startFree')}
                                        <ArrowRightIcon width={40} height={20} />
                                    </Button>
                                </motion.button>
                                <motion.button {...hoverScale}>
                                    <Button variant="outline" size="default">
                                        {t('home:hero.buttons.learnMore')}
                                    </Button>
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center md:justify-end"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt="Professional office documents"
                                    className="object-cover rounded-2xl"
                                    priority
                                    fill
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                id="features"
                className="py-24 bg-muted/40"
                {...fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div
                            className="inline-block border rounded-full px-3 py-1 mb-4"
                            variants={item}
                        >
                            <span className="text-sm text-muted-foreground">{t('home:features.badge')}</span>
                        </motion.div>
                        <motion.h2
                            className="text-4xl md:text-5xl mb-4 tracking-tight"
                            variants={item}
                        >
                            {t('home:features.title')}
                            <br />
                            {t('home:features.titleBreak')}
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            variants={item}
                        >
                            {t('home:features.description')}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div key={index} variants={item}>
                                    <Card className="p-6 hover:shadow-md transition-shadow h-full">
                                        <div className="inline-flex p-2.5 rounded-lg justify-center items-center mb-4">
                                            <Icon className="w-5 h-5 text-primary" weight="duotone" />
                                        </div>
                                        <h3 className="flex text-lg mb-2 justify-center items-center">{t(feature.titleKey)}</h3>
                                        <p className="flex text-sm text-muted-foreground justify-center items-center">{t(feature.descriptionKey)}</p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}
