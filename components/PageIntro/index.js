import ReactMarkdown from 'react-markdown'
import styles from './PageIntro.module.scss'

const PageIntro = ({heading, description}) => (
  <section className={styles.container}>
    {heading && <h2>{heading}</h2>}
    <ReactMarkdown source={description}/>
  </section>
)

export default PageIntro
