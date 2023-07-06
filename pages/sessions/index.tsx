import { useEffect, useContext, useState } from 'react'
import PromptContext from '../../src/prompt-context'
import { BarLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast'
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

  const handleCopy = async (session: string) => {
    try {
      await navigator.clipboard.writeText(session)
      toast('Session idea copied')
    } catch (err) {
      toast('Session failed to copy',
        {
          style: {
            background: 'hsl(0, 100%, 50%)'
          }
        }
      )
    }
  }

  const sessionsJSX = sessions.map((session, index) => (
    <div className={styles.drawer} key={index}>
      <h1>{`Session #${index + 1}`}</h1>
      <p>{session}...</p>
      <button onClick={() => handleCopy(session)}>Copy Session</button>
    </div>
  ))

  return (
    <div className={styles.sessions}>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            background: 'hsl(30, 56%, 29%)',
            color: '#FFF',
            fontWeight: 400
          },
          success: {
            duration: 3000
          }
        }}
      />
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