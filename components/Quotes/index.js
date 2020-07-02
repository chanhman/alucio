import styles from './Quotes.module.scss'

const Quotes = ({data}) => {
  return (
    <section className={styles.container}>
      {data.map(({quote}) => (
        <blockquote className={styles.blockquote}>
          <p>{quote}</p>
        </blockquote>
      ))}
    </section>
  )
}

export default Quotes
