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
        Landing Page
        <Link href="/editor">
          Editor
        </Link>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
