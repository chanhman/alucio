import styles from './Profile.module.scss'

const Profile = ({name, title, picture, children}) => {
  const bgi ={
    backgroundImage: 'url(' + picture + ')',
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner} style={bgi}></div>
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  )
}

export default Profile;
