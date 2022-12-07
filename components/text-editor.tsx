import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css' // Add css for snow theme

export default function TextEditor({ prompt }) {
  const { quill, quillRef } = useQuill()
  console.log(quill)    // undefined > Quill Object
  console.log(quillRef) // { current: undefined } > { current: Quill Editor Reference }

  useEffect(() => {
    if (quill) {
      quill.setText(prompt)
    }
  }, [prompt])

  return (
    <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
  )
}