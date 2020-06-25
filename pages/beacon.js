import Layout from '../components/Layout';
import { attributes } from '../content/beacon.md'
import Hero from '../components/Product/Hero'
import Features from '../components/Product/Features'
import Highlight from '../components/Product/Highlight'

const Product = () => (
  <Layout>
    <Hero
      heading={attributes.hero__heading}
      tagline={attributes.hero__tagline}
      subheading={attributes.keyFeatures__heading}
      description={attributes.keyFeatures__description}
    />

    <Features data={attributes}/>

    <Highlight
      heading={attributes.integratedVideoConferencing__heading}
      description={attributes.integratedVideoConferencing__description}
    />

    <Highlight
      heading={attributes.platformFlexibility__heading}
      description={attributes.platformFlexibility__description}
      invert
      flip
    />
  </Layout>
)

export default Product
