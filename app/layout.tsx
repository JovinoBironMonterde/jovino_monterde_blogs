import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../public/css/global.css'
import '../public/css/style.css'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container pb-3">
          <div className="topbar-container mb-4">
            <Topbar/>
            </div>
          <div className="navigation">
          <Navbar/>
          </div>
          <div className="pagesContainer">
          {children}
          </div>
        </div>
        </body>
    </html>
  )
}
