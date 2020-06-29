import styles from './Profile.module.scss'

const Profile = ({name, picture, children, ...other}) => {
  const bgi ={
    backgroundImage: 'url(' + picture + ')',
  }

  return (
    <div className={styles.container} style={bgi}>
      <div className={styles.inner}>
        <h3 className={styles.name}>Name</h3>
        {children}
      </div>
    </div>
  )
}

export default Profile;
