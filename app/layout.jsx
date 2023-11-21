import './globals.css'

import { Bangers, Lato } from 'next/font/google'

import Header from './components/Header'

const bangers = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bangers',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata = {
  title: 'Pokémon Profiler',
  description: 'Search skills and abilities of various Pokémon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${lato.variable}`}>
        <Header />
        <main className='container py-12'>
          {children}
        </main>
      </body>
    </html>
  )
}
