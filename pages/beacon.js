import Layout from '../components/Layout';
import { attributes } from '../content/beacon.md'
import Hero from '../components/Product/Hero'
import Features from '../components/Features'
import Feature from '../components/Feature'
import Highlight from '../components/Highlight'

const Product = () => {
  let {keyFeatures} = attributes

  return (
    <Layout>
      <Hero
        heading={attributes.hero__heading}
        tagline={attributes.hero__tagline}
        subheading={attributes.keyFeatures__heading}
        description={attributes.keyFeatures__description}
      />

      <Features>
        {keyFeatures.map(keyFeature => (
          <Feature
            heading={keyFeature.featureName}
            description={keyFeature.featureDescription}
            icon={keyFeature.featureIcon}
          />
        ))}
      </Features>

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
}

export default Product
