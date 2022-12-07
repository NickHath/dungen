import { useState } from 'react'
import PromptSelector from '../../src/components/prompt-selector'
import TextEditor from '../../src/components/text-editor'
import Submit from '../../src/components/submit'

export default function Editor() {
  const [selectedPrompt, setSelectedPrompt] = useState('')
  
  const handlePromptClick = function(newPrompt: string) {
    setSelectedPrompt(newPrompt);
  }

  return (
    <div>
      <PromptSelector handlePromptClick={handlePromptClick} />
      <TextEditor prompt={selectedPrompt} />
      <Submit />
    </div>
  )
}