import styles from './Features.module.scss'
import Feature from '../Feature'

const Features = ({data}) => {
  let {keyFeatures} = data

  return (
    <section className={styles.container}>
      {keyFeatures.map(keyFeature => (
        <Feature
          heading={keyFeature.featureName}
          description={keyFeature.featureDescription}
          icon={keyFeature.featureIcon}
        />
      ))}
    </section>
  )
}

export default Features
