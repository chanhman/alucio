import styles from './Highlight.module.scss'
import classes from 'classnames'

const Highlight = ({heading, description, image, invert, flip}) => (
  <section className={classes(styles.container, invert && styles.invert, flip && styles.flip)}>
    <div className={styles.text}>
      <h2 className={styles.heading}>{heading}</h2>
      <p>{description}</p>
    </div>
    <div>
      <div className={styles.imageWrapper}>
        <img src={image} alt=""/>
      </div>
    </div>
  </section>
)

export default Highlight
