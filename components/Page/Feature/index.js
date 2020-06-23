const Feature = ({icon, heading, description}) => (
  <section>
    <img src={icon} alt=""/>
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>
)

export default Feature
