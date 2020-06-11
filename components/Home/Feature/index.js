import styles from './Feature.module.scss'

const Feature = ({description}) => (
  <div>
    <div className={styles.iconWrapper}>
      <div className={styles.inner}>Icon</div>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
)

export default Feature
