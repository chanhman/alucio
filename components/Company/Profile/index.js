import Link from 'next/link'
import styles from './Profile.module.scss'

const Profile = ({name, title, picture, href, as, children}) => {
  const bgi ={
    backgroundImage: 'url(' + picture + ')',
  }

  if (href) {
    return (
      <Link href={href} as={as}>
        <a className={styles.container}>
          <div className={styles.inner} style={bgi}></div>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.title}>{title}</h4>
          {children}
        </a>
      </Link>
    )
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
