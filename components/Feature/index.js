import styles from './Feature.module.scss'

const Feature = ({icon, heading, description}) => (
  <div>
    <img className={styles.icon} src={icon} alt=""/>
    <h3 className={styles.heading}>{heading}</h3>
    <p className={styles.description}>{description}</p>
  </div>
)

export default Feature
