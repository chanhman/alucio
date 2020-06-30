import styles from './Feature.module.scss'

const Feature = ({icon, heading, description}) => (
  <div>
    {icon !== null || '' && <img src={icon} alt=""/>}
    <h3 className={styles.heading}>{heading}</h3>
    <p className={styles.description}>{description}</p>
  </div>
)

export default Feature
