import { useState } from 'react'
import PromptSelector from '../../components/prompt-selector'
import TextEditor from '../../components/text-editor'
import Submit from '../../components/submit'

export default function Editor() {
  const [selectedPrompt, setSelectedPrompt] = useState('')
  
  const handlePromptClick = function(newPrompt: string) {
    setSelectedPrompt(newPrompt);
  }

  console.log(selectedPrompt);
  
  return (
    <div>
      <PromptSelector handlePromptClick={handlePromptClick} />
      <TextEditor prompt={selectedPrompt} />
      <Submit />
    </div>
  )
}