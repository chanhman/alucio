import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>

    <Nav/>

    <main>{children}</main>

    <Footer/>
  </>
)

export default Layout
