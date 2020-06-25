import styles from './Hero.module.scss'

const Hero = ({heading, description}) => (
  <section className={styles.container}>
    <h1 className={styles.heading}>{heading}</h1>
    <p className={styles.description}>{description}</p>
  </section>
)

export default Hero;
