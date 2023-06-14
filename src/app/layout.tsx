import './globals.css'
import { Inter } from 'next/font/google'

import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'H.O.I - Hair On Image',
  description: 'Draw hair on your image',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://hoi.sidepunch.co'),
  manifest: 'https://hoi.sidepunch.co/manifest.json',
  openGraph: {
    title: 'H.O.I - Hair On Image',
    siteName: 'H.O.I - Hair On Image',
    description: 'Draw hair on your image',
    url: 'https://hoi.sidepunch.co',
    images: [
      {
        url: '/assets/logo_512.png',
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C3MSDP7L65"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C3MSDP7L65');
        `}
      </Script>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
