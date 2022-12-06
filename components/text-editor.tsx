import { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

export default function TextEditor({ prompt }) {
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = [
    { 
      type: 'paragraph' ,
      children: [{ text: 'Select a prompt above...' }]
    }
  ]
  
  return (
  <Slate editor={editor} value={initialValue}>
    <Editable />
  </Slate>
  )
}