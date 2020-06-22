import styles from './Hero.module.scss'
import { attributes } from '../../../content/home.md'

const Hero = () => (
  <section className={styles.container}>
    <h1 className={styles.heading}>{attributes.heroHeading}</h1>
    <h2 className={styles.subheading}>{attributes.heroDescription}</h2>
    <video playsinline autoplay muted loop poster="" id="">
      <source src={attributes.heroVideo} type="video/mp4" />
    </video>
  </section>
)

export default Hero;
