import Link from 'next/link'
import classes from 'classnames';
import styles from './Button.module.scss'

const Button = ({label, url, outline, external}) => {
  if (external) {
    return (
      <a
        className={classes(styles.container, outline && styles.outline)}
        href={url}
      >
        {label}
      </a>
    )
  }

  return (
    <Link href={url} passHref>
      <a className={classes(styles.container, outline && styles.outline)}>{label}</a>
    </Link>
  )
}

export default Button;
