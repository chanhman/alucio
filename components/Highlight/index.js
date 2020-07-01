import ReactMarkdown from 'react-markdown'
import classes from 'classnames'
import styles from './Highlight.module.scss'

const Highlight = ({heading, description, image, invert, flip}) => (
  <section className={classes(styles.container, invert && styles.invert, flip && styles.flip)}>
    <div className={styles.text}>
      <h2 className={styles.heading}>{heading}</h2>
      <ReactMarkdown source={description}/>
    </div>
    <div>
      <div className={styles.imageWrapper}>
        <img src={image} alt=""/>
      </div>
    </div>
  </section>
)

export default Highlight
