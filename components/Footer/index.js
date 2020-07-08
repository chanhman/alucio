import Link from 'next/link'
import IconFacebook from './icon-facebook.svg'
import IconInstagram from './icon-instagram.svg'
import IconLinkedIn from './icon-linkedIn.svg'
import IconTwitter from './icon-twitter.svg'
import styles from './Footer.module.scss'
import { attributes } from '../../content/footer.md'

const selectIcon = (iconName) => {
  switch (iconName) {
    case 'Facebook':
      return <IconFacebook/>
    case 'Instagram':
      return <IconInstagram/>
    case 'LinkedIn':
      return <IconLinkedIn/>
    case 'Twitter':
      return <IconTwitter/>
    default:
      return ''
  }
}

const Nav = () => {
  let { columnOne__links, columnTwo__links, socialMediaLinks, copyrightText } = attributes

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.links}>
          {columnOne__links.map(link => (
            <li>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className={styles.links}>
          {columnTwo__links.map(link => (
            <li>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul className={styles.socialMediaLinks}>
          {socialMediaLinks.map(link => (
            <li>
              <a href={link.url} className={styles.socialMediaLink}>
                {/* Used for a11y */}
                <div className={styles.hideText}>
                  {link.label}
                </div>
                {selectIcon(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>{copyrightText}</p>
    </footer>
  )
}

export default Nav
