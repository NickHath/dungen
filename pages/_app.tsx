import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/nav-bar'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['200', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <NavBar />
      <Component {...pageProps} />
    </main>
  )
}