import { createContext } from 'react'

const PromptContext = createContext({
  prompt: '',
  setPrompt: (prompt: string) => {}
})

export default PromptContext