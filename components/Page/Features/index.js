import Feature from '../Feature'

const Features = ({data}) => {
  let {keyFeatures} = data

  return (
    <section>
      {keyFeatures.map(keyFeature => (
        <Feature heading={keyFeature.featureName} description={keyFeature.featureDescription}></Feature>
      ))}
    </section>
  )
}

export default Features
