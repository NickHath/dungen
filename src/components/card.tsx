import styles from '../../styles/Card.module.css'
import PromptContext from '../prompt-context'
import { useContext } from 'react'

export default function Card({ title, description, promptText }) {
  const { setPrompt } = useContext(PromptContext)
  return (
    <div className={styles.card} onClick={() => setPrompt(promptText)}>
      <h1 className={styles.title}>{ title }</h1>
      <p>{ description }</p>
    </div>
  )
}