import styles from '../../styles/Submit.module.css'
import Link from 'next/link'

export default function Submit() {
  return (
    <div className={styles.submit}>
      <Link href='/sessions'>
        <button className={styles.submitButton}>Generate Session Ideas</button>
      </Link>
    </div>
  )
}