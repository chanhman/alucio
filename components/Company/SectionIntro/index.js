import styles from './SectionIntro.module.scss'

const SectionIntro = ({heading, description, children}) => (
  <section className={styles.container}>
    <div className={styles.intro}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
    </div>

    {children}
  </section>
)

export default SectionIntro;
