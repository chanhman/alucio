import styles from './Profiles.module.scss'

const Profiles = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Profiles
