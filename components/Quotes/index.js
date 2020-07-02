import styles from './Quotes.module.scss'

const Quotes = ({data}) => {
  return (
    <section className={styles.container}>
      <blockquote>
        <p>Quote</p>
      </blockquote>
    </section>
  )
}

export default Quotes
