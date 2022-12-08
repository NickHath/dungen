import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/nav-bar'
import { Poppins } from '@next/font/google'
import { useState } from 'react'
import PromptContext from '../src/prompt-context'
import Head from 'next/head'

const poppins = Poppins({
  weight: ['200', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const [prompt, setPrompt] = useState('')
  return (
    <main className={poppins.className}>
      <Head>
        <title>Dungen</title>
        <meta name='description' content='AI dungeons and dragons generator' />
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
      </Head>
      <NavBar />
      <PromptContext.Provider value={{ prompt, setPrompt }}>
        <Component {...pageProps} />
      </PromptContext.Provider>
    </main>
  )
}