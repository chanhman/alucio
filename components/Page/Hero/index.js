import styles from './Hero.module.scss'
import IconPlay from './iconPlay.svg'

const hero = ({heading, tagline, media, subheading, description}) => (
  <section className={styles.container}>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>{heading}</h1>
      <p>{tagline}</p>
    </div>
    <div className={styles.mediaContainer}>
      <button className={styles.playButton}><IconPlay/><span>Watch This Video To Learn More</span></button>
    </div>
    <div className={styles.subheadingContainer}>
      <h2 className={styles.subheading}>{subheading}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  </section>
)

export default hero
