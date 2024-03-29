import styles from '../../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarItems}>
        <li>
          <Link href='/' className={styles.logo}>
            <Image
              className={styles.swordAndShield}
              src='/sword-and-shield.png'
              alt='Picture of a sword and shield'
              width={48}
              height={48}
            />
            <div>Dungen</div>
          </Link>
        </li>
        <li>
          <Link href='/editor'>Session Generator</Link>
        </li>

      </ul>
    </nav>
  )
}