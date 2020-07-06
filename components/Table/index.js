import styles from './Table.module.scss'

const Table = ({headings, rows}) => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        {headings.map(heading => (
          <div className={styles.cell}>{heading.heading}</div>
        ))}
      </div>

      {rows.map(row => (
        <div className={styles.row}>
          <div className={styles.cell}>
            <a href={row.link}>{row.title}</a>
          </div>
          <div className={styles.cell}>
            {row.source}
          </div>
          <div className={styles.cell}>
            {row.date}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Table
