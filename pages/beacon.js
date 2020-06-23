import Layout from '../components/Layout';
import { attributes } from '../content/beacon.md'
import Hero from '../components/Page/Hero'
import Features from '../components/Page/Features'
import Highlight from '../components/Page/Highlight'

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
    />
  </Layout>
)

export default Product
