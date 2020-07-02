import styles from './PageIntro.module.scss'

const PageIntro = ({heading, description}) => (
  <section className={styles.container}>
    <p>{description}</p>
  </section>
)

export default PageIntro
