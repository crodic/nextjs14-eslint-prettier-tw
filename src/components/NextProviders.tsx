'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const NextProviders = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="next-theme"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}

export default NextProviders
