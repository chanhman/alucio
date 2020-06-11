import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Layout>
    <Hero></Hero>
    <h3>{attributes.featuresHeading}</h3>
    <p>{attributes.featureOne}</p>
    <p>{attributes.featureTwo}</p>
    <p>{attributes.featureThree}</p>
    <h3>{attributes.beaconHeading}</h3>
    <p>{attributes.beaconDescription}</p>

    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

export default Home
