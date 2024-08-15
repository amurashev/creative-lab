import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: string }
  children: React.ReactNode
}>) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <Header />
        <main className="">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
