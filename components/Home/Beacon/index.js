import styles from './index.module.scss'
import { attributes } from '../../../content/home.md'

const Beacon = () => (
  <section className={styles.container}>
    <h2 className={styles.heading}>{attributes.beaconHeading}</h2>
    <p className={styles.description}>{attributes.beaconDescription}</p>
    <a className={styles.cta} href={attributes.beaconCtaUrl}>{attributes.beaconCtaLabel}</a>
  </section>
)

export default Beacon;
