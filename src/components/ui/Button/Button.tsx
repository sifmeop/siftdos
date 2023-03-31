import { memo } from 'react'
import styles from './Button.module.scss'

interface Props {
  title: string
}

const Button = ({ title }: Props) => {
  return <button className={styles.button}>{title}</button>
}

export default memo(Button)
