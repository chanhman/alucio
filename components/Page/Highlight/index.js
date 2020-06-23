import styles from './Highlight.module.scss'

const Highlight = ({heading, description, media}) => (
  <section className={styles.container}>
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
