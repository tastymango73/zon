import { Inter } from 'next/font/google'

import './globals.css'
import { Providers } from '@/config/providers'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Providers>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </Providers>
    </html>
  )
}
