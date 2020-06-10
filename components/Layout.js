import Head from 'next/head'
import Nav from '../components/Nav'

const Layout = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>

    <Nav/>

    <main>{children}</main>
  </>
)

export default Layout
