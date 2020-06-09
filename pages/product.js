import Layout from '../components/Layout';
import { attributes } from '../content/product.md'

const Product = () => (
  <Layout>
    <h1>Product</h1>

    <div>{ attributes.hero__heading }</div>
    <div>{ attributes.hero__description }</div>

    <div>{ attributes.productOverview__heading }</div>

    <div>{ attributes.keyFeatures__heading }</div>
    <div>{ attributes.keyFeatures__description }</div>
    <div>{ attributes.keyFeature__heading1 }</div>
    <div>{ attributes.keyFeature__description1 }</div>
    <div>{ attributes.keyFeature__heading2 }</div>
    <div>{ attributes.keyFeature__description2 }</div>
    <div>{ attributes.keyFeature__heading3 }</div>
    <div>{ attributes.keyFeature__description3 }</div>
    <div>{ attributes.keyFeature__heading4 }</div>
    <div>{ attributes.keyFeature__description4 }</div>
    <div>{ attributes.keyFeature__heading5 }</div>
    <div>{ attributes.keyFeature__description5 }</div>
    <div>{ attributes.keyFeature__heading6 }</div>
    <div>{ attributes.keyFeature__description6 }</div>
    <div>{ attributes.keyFeature__heading7 }</div>
    <div>{ attributes.keyFeature__description7 }</div>
    <div>{ attributes.keyFeature__heading8 }</div>
    <div>{ attributes.keyFeature__description8 }</div>

    <div>{ attributes.integratedVideoConferencing__heading }</div>
    <div>{ attributes.integratedVideoConferencing__description }</div>
    <div>{ attributes.integratedVideoConferencing__ctaLabel }</div>

    <div>{ attributes.platformFlexibility__heading }</div>
    <div>{ attributes.platformFlexibility__description }</div>

    <div>{ attributes.logo1 }</div>
    <div>{ attributes.logo2 }</div>
    <div>{ attributes.logo3 }</div>
    <div>{ attributes.logo4 }</div>
    <div>{ attributes.logo5 }</div>
    <div>{ attributes.logo6 }</div>
    <div>{ attributes.logo7 }</div>
  </Layout>
)

export default Product