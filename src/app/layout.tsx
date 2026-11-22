import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingContact } from '@/components/layout/FloatingContact'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  fallback: ['system-ui', 'sans-serif'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://remztech.co.za'),
  title: {
    default: 'RemzTech | Handbuilt Software Solutions',
    template: '%s | RemzTech',
  },
  description: 'Handbuilt software solutions. Direct access to your engineer. Modern solutions with smarter futures. Software development, IT consulting, cybersecurity, cloud solutions, managed services, custom apps in Durban, South Africa.',
  keywords: ['software development', 'IT consulting', 'cybersecurity', 'cloud solutions', 'managed services', 'custom apps', 'Durban', 'KwaZulu-Natal', 'South Africa'],
  authors: [{ name: 'RemzTech' }],
  creator: 'RemzTech',
  publisher: 'RemzTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://remztech.co.za',
    siteName: 'RemzTech',
    title: 'RemzTech | Handbuilt Software Solutions',
    description: 'Handbuilt software solutions. Direct access to your engineer. Modern solutions with smarter futures.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RemzTech - Handbuilt Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RemzTech | Handbuilt Software Solutions',
    description: 'Handbuilt software solutions. Direct access to your engineer. Modern solutions with smarter futures.',
    images: ['/og-image.jpg'],
    creator: '@remztech',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#164A41' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-remz-white font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-remz-primary text-remz-white rounded-fluid-md">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16 sm:pt-20" role="main">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}