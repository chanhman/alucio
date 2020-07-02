import styles from './PartnerLogos.module.scss'

const PartnerLogos = ({logos}) => {
  return (
    <section className={styles.container}>
      {logos.map(() => (
        <div>
          yay
        </div>
      ))}
    </section>
  )
}

export default PartnerLogos
