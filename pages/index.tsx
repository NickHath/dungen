import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dungen</title>
        <meta name='description' content='AI dungeons and dragons generator' />
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
      </Head>

      <main className={styles.main}>
        {/* Informative Landing Page to lay out process and explain how to come up with setting, then how it will generate session ideas for you */}
        <div className={styles.section}>
          <h1>AI-Powered D&D session ideas</h1>
          <p>Using <a href='' target='_external'>Open AI's GPT-3</a>, Dungen generates Dungeons and Dragons session ideas using a setting description. Simply use a template or type in your D&D setting background, then you can generate a list of session ideas informed by that setitng.</p>
        </div>
        <div className={styles.section}>
          <h1>How it works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Link href='/editor'>
            <button>Generate Session Ideas</button>
        </Link>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
