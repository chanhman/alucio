import styles from './Feature.module.scss'

const Feature = ({icon, description}) => (
  <div>
    <div className={styles.iconWrapper}>
      <div className={styles.inner}>
        <img src={icon} alt=""/>
      </div>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
)

export default Feature
