import { memo, useState } from 'react'
import styles from './Checkbox.module.scss'

interface Props {
  handlerCompletedTodo: () => void
}

const Checkbox = ({ handlerCompletedTodo }: Props) => {
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

export default memo(Checkbox)
