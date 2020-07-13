import Link from 'next/link'
import MobileNav from '../MobileNav'
import Logo from './logo.svg'
import Button from '../Button'
import styles from './Nav.module.scss'
import { attributes } from '../../content/navigation.md'

const Nav = () => {
  const { links } = attributes;

  return (
    <>
      <header className={styles.container}>
        <div>
          <Link href="/">
            <a><Logo className={styles.logo} /></a>
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            {links.map(link => (
              <li key={link.url}>
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
          <MobileNav/>
        </div>
      </header>

    </>
  )
}

export default Nav
