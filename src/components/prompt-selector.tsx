import styles from '../../styles/PromptSelector.module.css'
import Card from './card'
import prompts from '../prompts.json'

export default function PromptSelector() {
  const promptsJSX = prompts.map((prompt, index) => (
    <Card 
      key={index}
      title={prompt.title} 
      description={prompt.description} 
      promptText={prompt.promptText}
    />
  ))

  
  return (
    <div className={styles.promptSelector}>
      <h1 className={styles.title}>Select a setting</h1>
      <div className={styles.promptWrapper}>
        { promptsJSX }
      </div>
    </div>
  )
}