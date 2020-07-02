import styles from './PartnerLogos.module.scss'

const PartnerLogos = ({logos}) => {
  return (
    <section className={styles.container}>
      {logos.map(logo => (
        <div>
          <img className={styles.logo} src={logo.src} alt=""/>
        </div>
      ))}
    </section>
  )
}

export default PartnerLogos
