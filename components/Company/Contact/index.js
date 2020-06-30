import styles from './Contact.module.scss'

const Contact = ({data}) => (
  <section className={styles.container}>
    <h2 className={styles.heading}>Contact</h2>
    <div className={styles.columns}>
      <div>
        <h3 className={styles.subheading}>Customer Inquiries</h3>
        <p><a href="#">415.XXX.XXXX</a></p>
        <p><a href="mailto:sales@alucio.io">sales@alucio.io</a></p>
        <p><a href="#">Request a Demo</a></p>
      </div>
      <div>
        <h3 className={styles.subheading}>Media Relations</h3>
        <p>Lisa Amin Gulezian</p>
        <p><a href="tel:925-788-3533">925-788-3533</a></p>
        <p><a href="mailto:lgulezian@alucio.io">lgulezian@alucio.io</a></p>
      </div>
    </div>
  </section>
);

export default Contact
