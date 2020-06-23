import styles from './Feature.module.scss'

const Feature = ({icon, heading, description}) => (
  <section>
    <img src={icon} alt=""/>
    <h3 className={styles.heading}>{heading}</h3>
    <p>{description}</p>
  </section>
)

export default Feature
