import ReactMarkdown from 'react-markdown'
import styles from './Bio.module.scss'

const Bio = ({picture, title, jobTitle, jobTitle2, bio}) => {
  const bgi ={
    backgroundImage: 'url(' + picture + ')',
  }

  return (
    <article className={styles.container}>
      <div className={styles.colOne}>
        <div className={styles.image} style={bgi}></div>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.title}>{jobTitle}</p>
        <p className={styles.title}>{jobTitle2}</p>
      </div>
      <div>
        <ReactMarkdown source={bio}></ReactMarkdown>
      </div>
    </article>
  )
}

export default Bio
