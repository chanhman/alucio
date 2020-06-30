import styles from './Profile.module.scss'

const Profile = ({name, title, picture, children, ...other}) => {
  const bgi ={
    backgroundImage: 'url(' + picture + ')',
  }

  return (
    <div className={styles.container} style={bgi}>
      <div className={styles.inner}>
        <h3 className={styles.name}>{name}</h3>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default Profile;
