import styles from './Cta.module.scss'

const Cta = ({data}) => (
  <div className={styles.container}>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <h2 className={styles.heading}>{data.ctaHeading}</h2>
      <a className={styles.cta} href={data.ctaUrl}>{data.ctaLbl}</a>
    </div>
  </div>
)

export default Cta
