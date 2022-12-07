import { useEffect, useContext } from 'react'
import { useQuill } from 'react-quilljs'
import styles from '../../styles/TextEditor.module.css'
import 'quill/dist/quill.snow.css'
import PromptContext from '../prompt-context'

export default function TextEditor() {
  const { prompt } = useContext(PromptContext)
  // save prompt to local storage
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