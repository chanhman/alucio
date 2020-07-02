import styles from './Features.module.scss'
import Feature from '../Feature'

const Features = ({data}) => (
  <section className={styles.container}>
    <h3 className={styles.heading}>{data.featuresHeading}</h3>

    <div className={styles.features}>
      <div>
        <Feature icon={data.featureOneIcon} description={data.featureOne}></Feature>
      </div>
      <div>
        <Feature icon={data.featureTwoIcon} description={data.featureTwo}></Feature>
      </div>
      <div>
        <Feature icon={data.featureThreeIcon} description={data.featureThree}></Feature>
      </div>
    </div>
  </section>
)

export default Features;
