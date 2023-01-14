import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const ghibli = localFont({
  src: [
    {
      path: './Ghibli.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Ghibli-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-ghibli",
  display: 'swap'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ghibli.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
