import styles from './Beacon.module.scss'

const Beacon = ({data}) => (
  <section className={styles.container}>
    <div>
      <h2 className={styles.heading}>{data.beaconHeading}</h2>
      <p className={styles.description}>{data.beaconDescription}</p>
      <a className={styles.cta} href={data.beaconCtaUrl}>{data.beaconCtaLabel}</a>
    </div>
  </section>
)

export default Beacon;
