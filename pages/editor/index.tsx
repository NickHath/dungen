import { useState } from 'react'
import PromptSelector from '../../components/prompt-selector'
import TextEditor from '../../components/text-editor'

export default function Editor() {
  const [selectedPrompt, setSelectedPrompt] = useState('')
  
  const handlePromptClick = function(newPrompt: string) {
    setSelectedPrompt(newPrompt);
  }

  return (
    <div>
      <PromptSelector handlePromptClick={handlePromptClick} />
      <TextEditor prompt={selectedPrompt} />
    </div>
  )
}