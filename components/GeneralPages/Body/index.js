import ReactMarkdown from 'react-markdown'
import styles from './Body.module.scss'

const Body = ({data}) => (
  <ReactMarkdown source={data} className={styles.container}/>
)

export default Body
