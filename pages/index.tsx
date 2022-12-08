import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.section}>
          <h1>AI-Powered D&D session ideas</h1>
          <p>Using <a href='https://openai.com/' target='_external'>Open AI's GPT-3</a>, Dungen generates Dungeons and Dragons session ideas using a setting description. Simply use a template or type in your D&D setting background, then you can generate a list of session ideas informed by that setitng.</p>
        </div>
        <div className={styles.section}>
          <h1>How it works</h1>
          <p>Dungen uses the AI model GPT-3, which is trained on a vast corpus of language data. Supported by OpenAI, it is able to generate text following a prompt. In other words, it completes a text with its best guesses for the next word in order. Dungen uses GPT-3 by giving it a D&D setting that you provide, adding additional details to the prompt, then sending it to OpenAI to obtain text generations of session ideas.</p>
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
