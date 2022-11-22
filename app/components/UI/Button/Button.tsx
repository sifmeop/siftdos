import { FC } from 'react'
import styles from './Button.module.scss'

const Button: FC<{ title: string }> = ({ title }) => {
  return <button className={styles.button}>{title}</button>
}

export default Button
