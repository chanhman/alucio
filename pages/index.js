import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Layout>
    <h1>{attributes.heroHeading}</h1>
    <h2>{attributes.heroDescription}</h2>
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
