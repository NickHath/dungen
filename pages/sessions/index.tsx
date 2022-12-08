import { useEffect, useContext, useState } from 'react'
import PromptContext from '../../src/prompt-context'
import { BarLoader } from 'react-spinners'
import styles from '../../styles/Sessions.module.css'

export default function Sesions() {
  const { prompt } = useContext(PromptContext)
  const [sessions, setSessions] = useState([] as string[])

  useEffect(() => {
    fetch('/api/generate', { method: 'POST', body: prompt })
      .then(res => res.json())
      .then(res => setSessions(res.generations))
      .catch(err => console.error(err))
  }, [])

  const sessionsJSX = sessions.map((session, index) => (
    <div className={styles.drawer}>
      <h1>{`Session #${index + 1}`}</h1>
      <p>{session}...</p>
    </div>
  ))

  return (
    <div className={styles.sessions}>
      { sessionsJSX.length ? 
          sessionsJSX : 
          <BarLoader
            className={styles.loader}
            color='hsl(30, 56%, 29%)'
            height={15} 
            width={500}
          /> 
      }
    </div>
  )
}