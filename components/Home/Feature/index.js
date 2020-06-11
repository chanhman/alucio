import styles from './index.module.scss'

const Feature = ({description}) => (
  <>
    <div className={styles.iconWrapper}>
      <div className={styles.inner}>Icon</div>
    </div>
    <p className={styles.description}>{description}</p>
  </>
)

export default Feature
