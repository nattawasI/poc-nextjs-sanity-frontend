import localFont from 'next/font/local'
import './globals.css'
import { SanityLive } from '@/libs/sanity/live'
import { ViewTransitions } from 'next-view-transitions'

const lineSeedSansTHFont = localFont({
  src: '../fonts/lineseedsansth-regular.woff2',
  display: 'swap',
  variable: '--font-lineseedsansth',
})

const optimaFont = localFont({
  src: [
    {
      path: '../fonts/optima-regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/optima-bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-optima',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${lineSeedSansTHFont.variable} ${optimaFont.variable}`}>
          {children}
          <SanityLive />
        </body>
      </html>
    </ViewTransitions>
  )
}
