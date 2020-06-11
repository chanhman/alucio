import styles from './Hero.module.scss'
import { attributes } from '../../../content/home.md'

const Hero = () => (
  <section className={styles.container}>
    <h1 className={styles.heading}>{attributes.heroHeading}</h1>
    <h2 className={styles.subheading}>{attributes.heroDescription}</h2>
  </section>
)

export default Hero;
