import type { Metadata, Viewport } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'
import './la-landing.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
})

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
  variable: '--font-unbounded',
})

const pageTitle =
  'La Casino — официальный сайт, рабочее зеркало и вход в Ля Казино простым языком.'
const pageDescription =
  'La Casino официальный сайт и рабочее зеркало: как войти в кабинет, отличить адрес от копии и играть с телефона. Ля Казино онлайн без чужих ссылок из чата и без второго аккаунта. Сверьте домен до входа'

export const metadata: Metadata = {
  metadataBase: new URL('https://la25casino.vercel.app'),
  title: pageTitle,
  description: pageDescription,
  applicationName: 'La Casino',
  alternates: {
    canonical: 'https://la25casino.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://la25casino.vercel.app/',
    siteName: 'La Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/art/la-table.jpg',
        width: 1200,
        height: 896,
        alt: 'Зелёное сукно, карты и фишки',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/art/la-table.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14382F',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} bg-background`}
    >
      <head>
        <meta name="yandex-verification" content="977456cf9cd59f90" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://la25casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#14382F" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la25casino.vercel.app/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://la25casino.vercel.app/art/la-table.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Дополнительные пользовательские теги — вставляйте сюда */}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
