import Link from 'next/link'
import { attributes } from '../content/footer.md'

const Nav = () => {
  let { columnOne__links, columnTwo__links, socialMediaLinks, copyrightText } = attributes;

  return (
    <footer>
      <ul>
        {columnOne__links.map(link => (
          <li>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        {columnTwo__links.map(link => (
          <li>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        {socialMediaLinks.map(link => (
          <li>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <p>{copyrightText}</p>
    </footer>
  )
}

export default Nav