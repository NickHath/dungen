import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarItems}>
        <li>
          <div>Dungen</div>
          <Image
            className={styles.swordAndShield}
            src='/../public/sword-and-shield.png'
            alt='Picture of a sword and shield'
            width={48}
            height={48}
          />
        </li>
        <Link href="/"><li>Home</li></Link>
        <Link href="/editor"><li>Idea Generator</li></Link>
        <Link href="/about"><li>About</li></Link>
      </ul>
    </nav>
  )
}