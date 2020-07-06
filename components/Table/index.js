import Link from 'next/link'
import styles from './Table.module.scss'

// Grab object to get key value pairs
// Loop to get headers
// Loop to get rows

const Table = ({data, articles, research}) => {
  return (
    <section className={styles.container}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {data.map(row => (
        <div>
          <a href={row.link}>{row.title}</a>
          {row.date}
        </div>
      ))}
    </section>
  )
}

export default Table
