import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import NextProviders from '@/components/NextProviders'
import ProgressBar from '@/components/layout/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={inter.className}>
                <NextProviders>
                    <ProgressBar />
                    {children}
                </NextProviders>
            </body>
        </html>
    )
}
