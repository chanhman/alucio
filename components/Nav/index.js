import Link from 'next/link'
import Logo from './logo.svg'
import Button from '../Button'
import styles from './index.module.scss'
import { attributes } from '../../content/navigation.md'

const Nav = () => {
  let { links } = attributes;

  return (
    <header className={styles.container}>
      <div>
        <Link href="/">
          <Logo className={styles.logo}/>
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.links}>
          {links.map(link => (
            <li>
              <Link href={link.url}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className={styles.cta}>
          <Button label='Request a demo' url='#'/>
        </div>
        <div className={styles.menuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Nav
