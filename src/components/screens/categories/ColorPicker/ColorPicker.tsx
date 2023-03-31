import { useAppDispatch } from '@/hooks/redux'
import { addCategory } from '@/store/slices/categoriesSlice'
import { useCallback, useState } from 'react'
import styles from './ColorPicker.module.scss'

const ColorPicker = () => {
  const [title, setTitle] = useState<string>('')
  const [color, setColor] = useState<string>('#5F9DF7')
  const dispatch = useAppDispatch()

  const createCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const createdCategory = { id: Date.now(), title, color }
      dispatch(addCategory(createdCategory))
      setTitle('')
      setColor('#5F9DF7')
    },
    [color, dispatch, title]
  )

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
