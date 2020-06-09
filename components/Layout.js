import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/company">
        <a>Company</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/partners">
        <a>Partners</a>
      </Link>
      <Link href="/perspectives">
        <a>Perspectives</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </nav>
    <main>{children}</main>
  </>
)

export default Layout
