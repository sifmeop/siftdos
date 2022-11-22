import { FC, useState } from 'react'
import styles from './Checkbox.module.scss'

const Checkbox: FC<{ handlerCompletedTodo: () => void }> = ({ handlerCompletedTodo }) => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={() => setChecked(!checked)}
      className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
      onClick={handlerCompletedTodo}
    />
  )
}

export default Checkbox
