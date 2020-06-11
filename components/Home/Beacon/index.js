import classes from 'classnames';
import styles from './index.module.scss'
import Dashes from './dashes.svg'
import { attributes } from '../../../content/home.md'

const Beacon = () => (
  <section className={styles.container}>
    <div>
      <h2 className={styles.heading}>{attributes.beaconHeading}</h2>
      <p className={styles.description}>{attributes.beaconDescription}</p>
      <a className={styles.cta} href={attributes.beaconCtaUrl}>{attributes.beaconCtaLabel}</a>
    </div>
    <div>
      <div className={styles.infoGraphic}>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl1}</div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl2}</div>
        </div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div></div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl3}</div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl4}</div>
        </div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div></div>
        <div className={styles.dashes}><Dashes></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl5}</div>
        </div>
        <div className={styles.dashes}><Dashes className={styles.rotate}></Dashes></div>
        <div className={styles.infoGraphic__cell}>
          <div className={styles.inner}>{attributes.infoGraphicLbl6}</div>
        </div>
      </div>
    </div>
  </section>
)

export default Beacon;
