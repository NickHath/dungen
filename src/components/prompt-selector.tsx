import styles from '../../styles/PromptSelector.module.css'
import Card from './card'

const testPrompts = [
  {
    title: "The Lost City",
    description: "The Lost City campaign is...",
    promptText: "The Lost City campaign is..."
  },
  {
    title: "The Curse of Strahd",
    description: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard.",
    promptText: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard. Using a deck of tarokka cards to predict their future, a fortune-teller named Madam Eva sets them on a dark course that takes them to many corners of Barovia, culminating with a vampire hunt in Castle Ravenloft. Madam Eva\'s people are called the Vistani. They travel in covered wagons from world to world, luring strangers into Strahd\'s domain. Barovia is a land of ghosts, werewolves, and other fell creatures. The wilderness hides many secrets, including forgotten ruins and battlefields that tell the story of Strahd's life as a conqueror. Adventurers who explore the wilderness find the remnants of Strahd's ancient enemies, not all of them as dead as one might expect. For the people of Barovia, there is no escape from this harsh. land. The town of Vallaki stands ready to defend itself against the servants of Strahd, but it's far from the sanctuary it purports to be. The village of Krezk lies near the edge of Strahd's domain, its abbey now in the clutches of evil, misguided creatures.      The first session involves three novice adventurers: Elewyn, Jezebel, and Felix. Elewyn is a half-elf, half-human wizard with a chaotic neutral alignment. Jezebel is a dwarven paladin with a lawful good alignment. Felix is a half-orc archer with a true neutral alignment.",
  },
  {
    title: "The Temple of Elemental Evil",
    description: "The Temple of Elemental Evil campaign is...",
    promptText: "The Temple of Elemental Evil campaign is..."
  },
  {
    title: "The Lost City",
    description: "The Lost City campaign is...",
    promptText: "The Lost City campaign is..."
  },
  {
    title: "The Curse of Strahd",
    description: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard.",
    promptText: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard. Using a deck of tarokka cards to predict their future, a fortune-teller named Madam Eva sets them on a dark course that takes them to many corners of Barovia, culminating with a vampire hunt in Castle Ravenloft. Madam Eva\'s people are called the Vistani. They travel in covered wagons from world to world, luring strangers into Strahd\'s domain. Barovia is a land of ghosts, werewolves, and other fell creatures. The wilderness hides many secrets, including forgotten ruins and battlefields that tell the story of Strahd's life as a conqueror. Adventurers who explore the wilderness find the remnants of Strahd's ancient enemies, not all of them as dead as one might expect. For the people of Barovia, there is no escape from this harsh. land. The town of Vallaki stands ready to defend itself against the servants of Strahd, but it's far from the sanctuary it purports to be. The village of Krezk lies near the edge of Strahd's domain, its abbey now in the clutches of evil, misguided creatures.      The first session involves three novice adventurers: Elewyn, Jezebel, and Felix. Elewyn is a half-elf, half-human wizard with a chaotic neutral alignment. Jezebel is a dwarven paladin with a lawful good alignment. Felix is a half-orc archer with a true neutral alignment.",
  },
  {
    title: "The Temple of Elemental Evil",
    description: "The Temple of Elemental Evil campaign is...",
    promptText: "The Temple of Elemental Evil campaign is..."
  },
  {
    title: "The Lost City",
    description: "The Lost City campaign is...",
    promptText: "The Lost City campaign is..."
  },
  {
    title: "The Curse of Strahd",
    description: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard.",
    promptText: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard. Using a deck of tarokka cards to predict their future, a fortune-teller named Madam Eva sets them on a dark course that takes them to many corners of Barovia, culminating with a vampire hunt in Castle Ravenloft. Madam Eva\'s people are called the Vistani. They travel in covered wagons from world to world, luring strangers into Strahd\'s domain. Barovia is a land of ghosts, werewolves, and other fell creatures. The wilderness hides many secrets, including forgotten ruins and battlefields that tell the story of Strahd's life as a conqueror. Adventurers who explore the wilderness find the remnants of Strahd's ancient enemies, not all of them as dead as one might expect. For the people of Barovia, there is no escape from this harsh. land. The town of Vallaki stands ready to defend itself against the servants of Strahd, but it's far from the sanctuary it purports to be. The village of Krezk lies near the edge of Strahd's domain, its abbey now in the clutches of evil, misguided creatures.      The first session involves three novice adventurers: Elewyn, Jezebel, and Felix. Elewyn is a half-elf, half-human wizard with a chaotic neutral alignment. Jezebel is a dwarven paladin with a lawful good alignment. Felix is a half-orc archer with a true neutral alignment.",
  },
  {
    title: "The Temple of Elemental Evil",
    description: "The Temple of Elemental Evil campaign is...",
    promptText: "The Temple of Elemental Evil campaign is..."
  },
  {
    title: "The Lost City",
    description: "The Lost City campaign is...",
    promptText: "The Lost City campaign is..."
  },
  {
    title: "The Curse of Strahd",
    description: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard.",
    promptText: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard. Using a deck of tarokka cards to predict their future, a fortune-teller named Madam Eva sets them on a dark course that takes them to many corners of Barovia, culminating with a vampire hunt in Castle Ravenloft. Madam Eva\'s people are called the Vistani. They travel in covered wagons from world to world, luring strangers into Strahd\'s domain. Barovia is a land of ghosts, werewolves, and other fell creatures. The wilderness hides many secrets, including forgotten ruins and battlefields that tell the story of Strahd's life as a conqueror. Adventurers who explore the wilderness find the remnants of Strahd's ancient enemies, not all of them as dead as one might expect. For the people of Barovia, there is no escape from this harsh. land. The town of Vallaki stands ready to defend itself against the servants of Strahd, but it's far from the sanctuary it purports to be. The village of Krezk lies near the edge of Strahd's domain, its abbey now in the clutches of evil, misguided creatures.      The first session involves three novice adventurers: Elewyn, Jezebel, and Felix. Elewyn is a half-elf, half-human wizard with a chaotic neutral alignment. Jezebel is a dwarven paladin with a lawful good alignment. Felix is a half-orc archer with a true neutral alignment.",
  },
  {
    title: "The Temple of Elemental Evil",
    description: "The Temple of Elemental Evil campaign is...",
    promptText: "The Temple of Elemental Evil campaign is..."
  },
  {
    title: "The Lost City",
    description: "The Lost City campaign is...",
    promptText: "The Lost City campaign is..."
  },
  {
    title: "The Curse of Strahd",
    description: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard.",
    promptText: "The Curse of Strahd is a Dungeons and Dragons campaign with this setting: Adventurers from a foreign land find themselves in Barovia, a mysterious realm surrounded by deadly fog and ruled by Strahd von Zarovich, a vampire and wizard. Using a deck of tarokka cards to predict their future, a fortune-teller named Madam Eva sets them on a dark course that takes them to many corners of Barovia, culminating with a vampire hunt in Castle Ravenloft. Madam Eva\'s people are called the Vistani. They travel in covered wagons from world to world, luring strangers into Strahd\'s domain. Barovia is a land of ghosts, werewolves, and other fell creatures. The wilderness hides many secrets, including forgotten ruins and battlefields that tell the story of Strahd's life as a conqueror. Adventurers who explore the wilderness find the remnants of Strahd's ancient enemies, not all of them as dead as one might expect. For the people of Barovia, there is no escape from this harsh. land. The town of Vallaki stands ready to defend itself against the servants of Strahd, but it's far from the sanctuary it purports to be. The village of Krezk lies near the edge of Strahd's domain, its abbey now in the clutches of evil, misguided creatures.      The first session involves three novice adventurers: Elewyn, Jezebel, and Felix. Elewyn is a half-elf, half-human wizard with a chaotic neutral alignment. Jezebel is a dwarven paladin with a lawful good alignment. Felix is a half-orc archer with a true neutral alignment.",
  },
  {
    title: "The Temple of Elemental Evil",
    description: "The Temple of Elemental Evil campaign is...",
    promptText: "The Temple of Elemental Evil campaign is..."
  }
]

export default function PromptSelector({ handlePromptClick }) {
  const promptsJSX = testPrompts.map((prompt, index) => (
    <Card 
      title={prompt.title} 
      description={prompt.description} 
      promptText={prompt.promptText}
      handlePromptClick={handlePromptClick}
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