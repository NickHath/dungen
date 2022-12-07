import styles from '../styles/Card.module.css'

export default function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{ title }</h1>
      <p>{ description }</p>
    </div>
  )
}