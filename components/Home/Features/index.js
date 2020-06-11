import styles from './index.module.scss'
import Feature from '../Feature'
import { attributes } from '../../../content/home.md'

const Features = () => (
  <>
    <h3 className={styles.heading}>{attributes.featuresHeading}</h3>

    <Feature description={attributes.featureOne}></Feature>
    <Feature description={attributes.featureTwo}></Feature>
    <Feature description={attributes.featureThree}></Feature>
  </>
)

export default Features;
