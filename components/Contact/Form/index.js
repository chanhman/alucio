import styles from './Form.module.scss'
import { ServerStyleSheet } from 'styled-components'

const Form = () => (
  <form className={styles.container} name="contact" method="POST" data-netlify="true" action="/success">
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
    <input className={styles.submit} type="submit" value="Send"/>
  </form>
)

export default Form
