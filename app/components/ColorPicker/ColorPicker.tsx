import React, { FC, useState } from 'react'
import styles from './ColorPicker.module.scss'
import { useTypedDispatch } from '../../hooks/redux'
import { addCategory } from '../../store/categoriesSlice'

const ColorPicker: FC = () => {
  const [title, setTitle] = useState<string>('')
  const [color, setColor] = useState<string>('#5F9DF7')
  const dispatch = useTypedDispatch()

  const createCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(addCategory({ title, color, id: Date.now() }))
    setTitle('')
  }

  return (
    <form className={styles.form}>
      <input
        type='color'
        className={styles.colorPicker}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type='text'
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={'Enter category...'}
      />
      <button disabled={title === ''} className={styles.button} onClick={createCategory}>
        Create
      </button>
    </form>
  )
}

export default ColorPicker
