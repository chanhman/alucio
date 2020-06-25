import styles from './SectionIntro.module.scss'

const SectionIntro = ({heading, description}) => (
  <section className={styles.container}>
    <h2 className={styles.heading}>{heading}</h2>
    <p className={styles.description}>{description}</p>
  </section>
)

export default SectionIntro;
