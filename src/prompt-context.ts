import {createContext } from 'react'

const PromptContext = createContext({
  prompt: '',
  setPrompt: (prompt) => {}
})

export default PromptContext