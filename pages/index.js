import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import { attributes } from '../content/home.md'

const Home = () => (
  <Layout>
    <Hero></Hero>
    <Features></Features>
    <h3>{attributes.beaconHeading}</h3>
    <p>{attributes.beaconDescription}</p>
  </Layout>
)

export default Home
