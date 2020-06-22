import styles from './Hero.module.scss'
import { attributes } from '../../../content/home.md'

const Hero = () => (
  <section className={styles.container}>
    <h1 className={styles.heading}>{attributes.heroHeading}</h1>
    <h2 className={styles.subheading}>{attributes.heroDescription}</h2>
    <div className={styles.lighten}></div>
    <div className={styles.multiply}></div>
    <div className={styles.brighten}></div>
    <div className={styles.color}></div>
    <video src={attributes.heroVideo} autoPlay loop muted></video>
  </section>
)

export default Hero;
