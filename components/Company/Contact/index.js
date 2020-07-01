import ReactMarkdown from 'react-markdown'
import styles from './Contact.module.scss'

const Contact = ({data}) => (
  <section className={styles.container}>
    <h2 className={styles.heading}>{data.contact__heading}</h2>
    <div className={styles.columns}>
      <div>
        <h3 className={styles.subheading}>{data.contact__colOneSubheading}</h3>
        <ReactMarkdown source={data.contact__colOneContent}/>
      </div>
      <div>
        <h3 className={styles.subheading}>{data.contact__colTwoSubheading}</h3>
        <ReactMarkdown source={data.contact__colTwoContent}/>
      </div>
    </div>
  </section>
);

export default Contact
