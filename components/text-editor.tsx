import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import styles from '../styles/TextEditor.module.css'
import 'quill/dist/quill.snow.css'

export default function TextEditor({ prompt }) {
  const { quill, quillRef } = useQuill()

  useEffect(() => {
    if (quill) {
      quill.setText(prompt)
    }
  }, [prompt])

  return (
    <div>
      <h1 className={styles.title}>Edit it or add your own</h1>
      <div className={styles.quillEditor}>
        <div ref={quillRef} />
      </div>
    </div>

  )
}