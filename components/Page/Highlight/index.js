import styles from './Highlight.module.scss'
import classes from 'classnames';

const Highlight = ({heading, description, media, invert, flip}) => (
  <section className={classes(styles.container, invert && styles.invert, flip && styles.flip)}>
    <div className={styles.text}>
      <h2 className={styles.heading}>{heading}</h2>
      <p>{description}</p>
    </div>
    <div>
      <div className={styles.imageWrapper}>
        {media}
      </div>
    </div>
  </section>
)

export default Highlight
