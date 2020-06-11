import styles from './Cta.module.scss'
import { attributes } from '../../../content/home.md'

const Cta = () => (
  <div className={styles.container}>
    <div></div>
    <div></div>
    <div></div>
    <div>
      <h2 className={styles.heading}>{attributes.ctaHeading}</h2>
      <a className={styles.cta} href={attributes.ctaUrl}>{attributes.ctaLbl}</a>
    </div>
  </div>
)

export default Cta
