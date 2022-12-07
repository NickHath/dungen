import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dungen</title>
        <meta name="description" content="AI dungeons and dragons generator" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>

      <main className={styles.main}>
        <h1>Informative Landing Page to lay out process and explain how to come up with setting, then how it will generate session ideas for you</h1>
        <Link href="/editor">
          Editor
        </Link>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
