import ReactMarkdown from 'react-markdown'
import styles from './SectionIntro.module.scss'

const SectionIntro = ({heading, description, children}) => (
  <section className={styles.container}>
    <div className={styles.intro}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <ReactMarkdown
        source={description}
        className={styles.description}
      />
    </div>

    {children}
  </section>
)

export default SectionIntro;
