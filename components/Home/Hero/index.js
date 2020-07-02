import styles from './Hero.module.scss'

const Hero = ({data}) => (
  <section className={styles.container}>
    <h1 className={styles.heading}>{data.heroHeading}</h1>
    <h2 className={styles.subheading}>{data.heroDescription}</h2>
    <div className={styles.lighten}></div>
    <div className={styles.multiply}></div>
    <div className={styles.brighten}></div>
    <div className={styles.color}></div>
    <video src={data.heroVideo} autoPlay loop muted></video>
  </section>
)

export default Hero;
