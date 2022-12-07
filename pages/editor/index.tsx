import { useState } from 'react'
import PromptSelector from '../../src/components/prompt-selector'
import TextEditor from '../../src/components/text-editor'
import Submit from '../../src/components/submit'

export default function Editor() {
  return (
    <div>
      <PromptSelector />
      <TextEditor />
      <Submit />
    </div>
  )
}