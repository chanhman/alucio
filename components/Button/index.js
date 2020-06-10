import styles from './index.module.scss'

const Button = ({label, url}) => (
  <a className={styles.container} href={url}>{label}</a>
)

export default Button;