import Layout from '../components/Layout';
import { attributes, html } from '../content/product.md'

const Product = () => (
  <Layout>
    <h1>Product</h1>

    <div>{ attributes.heroHeading }</div>
    <div>{ attributes.heroDescription }</div>

    <div>{ attributes.productOverviewHeading }</div>

    <div>{ attributes.keyFeaturesHeading }</div>
    <div>{ attributes.keyFeaturesDescription }</div>
    <div>{ attributes.keyFeatureHeading1 }</div>
    <div>{ attributes.keyFeatureDescription1 }</div>
    <div>{ attributes.keyFeatureHeading2 }</div>
    <div>{ attributes.keyFeatureDescription2 }</div>
    <div>{ attributes.keyFeatureHeading3 }</div>
    <div>{ attributes.keyFeatureDescription3 }</div>
    <div>{ attributes.keyFeatureHeading4 }</div>
    <div>{ attributes.keyFeatureDescription4 }</div>
    <div>{ attributes.keyFeatureHeading5 }</div>
    <div>{ attributes.keyFeatureDescription5 }</div>
    <div>{ attributes.keyFeatureHeading6 }</div>
    <div>{ attributes.keyFeatureDescription6 }</div>
    <div>{ attributes.keyFeatureHeading7 }</div>
    <div>{ attributes.keyFeatureDescription7 }</div>
    <div>{ attributes.keyFeatureHeading8 }</div>
    <div>{ attributes.keyFeatureDescription8 }</div>

    <div>{ attributes.integratedVideoConferencingHeading }</div>
    <div>{ attributes.integratedVideoConferencingDescription }</div>
    <div>{ attributes.integratedVideoConferencingCTALabel }</div>
  </Layout>
)

export default Product