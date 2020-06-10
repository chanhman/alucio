import Link from 'next/link'
import { attributes } from '../content/navigation.md'

const Nav = () => {
  let { links } = attributes;

  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      {links.map(link => (
        <Link href={link.url}>
          <a>{link.label}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav