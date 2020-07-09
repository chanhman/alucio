import ReactMarkdown from 'react-markdown'
import styles from './PledgeOnePercent.module.scss'
import Button from '../../Button'

const PledgeOnePercent = ({heading, description, ctaLbl, ctaLink}) => (
  <section className={styles.container}>
    <div className={styles.inner}>
      <h2 className={styles.heading}>{heading}</h2>
      <ReactMarkdown
        source={description}
        className={styles.description}
      />
      <Button label={ctaLbl} url={ctaLink} outline external/>
    </div>
    <div className={styles.bgText}>{heading}</div>
  </section>
)

export default PledgeOnePercent
