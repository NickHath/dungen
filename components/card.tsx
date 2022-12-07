import styles from '../styles/Card.module.css'

export default function Card({ title, description, promptText, handlePromptClick }) {
  return (
    <div className={styles.card} onClick={() => handlePromptClick(promptText)}>
      <h1 className={styles.title}>{ title }</h1>
      <p>{ description }</p>
    </div>
  )
}