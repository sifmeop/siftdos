import { FC } from 'react'
import styles from './Input.module.scss'

interface IInput {
  id: string
  value: string
  onChange: (e: string) => void
}

const Input: FC<IInput> = ({ id, value, onChange }) => {
  return (
    <input
      id={id}
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  )
}

export default Input
