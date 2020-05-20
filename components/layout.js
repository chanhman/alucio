import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <nav>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
    <main>{children}</main>
  </>
)

export default Layout
