import styles from './Form.module.scss'
import { ServerStyleSheet } from 'styled-components'

const Form = () => (
  <form
    className={styles.container}
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    action="/success"
  >
    <input type="hidden" name="bot-field"/>
    <div>
      <label className={styles.label} htmlFor="fullName">Full Name</label>
      <input className={styles.input} type="text" name="fullName" id="fullName" required/>
    </div>
    <div>
      <label className={styles.label} htmlFor="email">Email</label>
      <input className={styles.input} type="email" name="email" id="email" required/>
    </div>
    <div>
      <label className={styles.label} htmlFor="company">Company</label>
      <input className={styles.input} type="text" name="company" id="company" required/>
    </div>
    <div>
      <label className={styles.label} htmlFor="comments">Comments</label>
      <textarea className={styles.textarea} name="comments" id="comments" cols="" rows=""></textarea>
    </div>
    <button className={styles.submit} type="submit">Send</button>
  </form>
)

export default Form
