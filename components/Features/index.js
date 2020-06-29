import styles from './Features.module.scss'

const Features = ({children}) => {

  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default Features
