import styles from './Features.module.scss'

const Features = ({heading, children}) => {
  return (
    <section className={styles.container}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}

      <div className={styles.inner}>
        {children}
      </div>
    </section>
  )
}

export default Features
