import styles from './Beacon.module.scss'
import Dashes from './dashes.svg'

const Beacon = ({data}) => (
  <section className={styles.container}>
    <div>
      <h2 className={styles.heading}>{data.beaconHeading}</h2>
      <p className={styles.description}>{data.beaconDescription}</p>
      <a className={styles.cta} href={data.beaconCtaUrl}>{data.beaconCtaLabel}</a>
    </div>
    <div>
      <div className={styles.infoGraphic}>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon1} alt=""/>
            {data.beaconInfoGraphicLbl1}
          </div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon2} alt=""/>
            {data.beaconInfoGraphicLbl2}
          </div>
        </div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div></div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon3} alt=""/>
            {data.beaconInfoGraphicLbl3}
          </div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon4} alt=""/>
            {data.beaconInfoGraphicLbl4}
          </div>
        </div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div></div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon5} alt=""/>
            {data.beaconInfoGraphicLbl5}
          </div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>
            <img src={data.beaconInfoGraphicIcon6} alt=""/>
            {data.beaconInfoGraphicLbl6}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Beacon;
