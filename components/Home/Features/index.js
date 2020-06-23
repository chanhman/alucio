import styles from './Features.module.scss'
import Feature from '../Feature'
import { attributes } from '../../../content/home.md'

const Features = () => (
  <section className={styles.container}>
    <h3 className={styles.heading}>{attributes.featuresHeading}</h3>

    <div className={styles.features}>
      <div>
        <Feature icon={attributes.featureOneIcon} description={attributes.featureOne}></Feature>
      </div>
      <div>
        <Feature icon={attributes.featureTwoIcon} description={attributes.featureTwo}></Feature>
      </div>
      <div>
        <Feature icon={attributes.featureThreeIcon} description={attributes.featureThree}></Feature>
      </div>
    </div>
  </section>
)

export default Features;
