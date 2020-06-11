import { useState } from 'react';
import Link from 'next/link'
import Logo from './logo-white.svg'
import classes from 'classnames';
import styles from './index.module.scss'
import { attributes } from '../../content/navigation.md'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { links } = attributes;

  return (
    <>
      <div className={styles.openToggle} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={classes(styles.menu, isOpen ? styles.active : '')}>
        <header className={styles.header}>
          <div>
            <Link href="/">
              <a><Logo className={styles.logo}/></a>
            </Link>
          </div>
          <div>
            <button className={styles.closeToggle} onClick={toggle}>Close</button>
          </div>
        </header>
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
      </div>
    </>
  );
}

export default MobileNav
