import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/nav-bar'
import { Poppins } from '@next/font/google'
import { useState } from 'react'
import PromptContext from '../src/prompt-context'

const poppins = Poppins({
  weight: ['200', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const [prompt, setPrompt] = useState('')
  return (
    <main className={poppins.className}>
      <NavBar />
      <PromptContext.Provider value={{ prompt, setPrompt }}>
        <Component {...pageProps} />
      </PromptContext.Provider>
    </main>
  )
}