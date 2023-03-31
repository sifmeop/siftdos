import { memo } from 'react'
import styles from './Input.module.scss'

interface Props {
  id: string
  value: string
  placeholder: string
  onChange: (e: string) => void
}

const Input = ({ id, value, placeholder, onChange }: Props) => {
  return (
    <input
      id={id}
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
      placeholder={placeholder}
    />
  )
}

export default memo(Input)
