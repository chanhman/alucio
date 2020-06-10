import Link from 'next/link'
import { attributes } from '../content/navigation.md'

const Nav = () => {
  let { links } = attributes;

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <ul>
        {links.map(link => (
          <li>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav