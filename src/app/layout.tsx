import './global.css'
import '../assets/scss/index.scss'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Verison from '../../package.json'

export const metadata: Metadata = {
 title: 'IP Address Calculator',
 description: 'Powered by thekrew.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <main className="min-h-screen h-max dark text-foreground bg-background">
     {children}

     <footer className="w-full text-center bg-background">
      <a href="https://thekrew.app" target="_blank" rel="noreferrer">
       thekrew.app
      </a>{' '}
      &nbsp; &copy; &nbsp;
      {new Date(Date.now()).getFullYear()}
      <span>&nbsp; ver: {Verison.version}</span>
     </footer>
    </main>
    <SpeedInsights />
    <Analytics />
   </body>
  </html>
 )
}
