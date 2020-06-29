import styles from './Profile.module.scss'

const Profile = ({children}) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <h3>Name</h3>
      {children}
    </div>
  </div>
)

export default Profile;
