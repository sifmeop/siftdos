import React, { FC, useState } from 'react'
import styles from './ChangeCategory.module.scss'
import Popup from '../Popup/Popup'
import { ICategory } from '../../models/category.interface'
import { useTypedDispatch } from '../../hooks/redux'
import { renameCategory } from '../../store/categoriesSlice'

interface IChangeCategory {
  category: ICategory
  setOpen: (open: boolean) => void
}

const ChangeCategory: FC<IChangeCategory> = ({ category, setOpen }) => {
  const [title, setTitle] = useState<string>(category.title)
  const [color, setColor] = useState<string>(category.color)
  const dispatch = useTypedDispatch()

  const changeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (category.title === title && category.color === color) {
      setOpen(false)
      return false
    }
    dispatch(renameCategory({ id: category.id, title, color }))
    setOpen(false)
  }

  return (
    <Popup>
      <h1 className={styles.title}>Change Category</h1>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={styles.colorPicker}
      />
      <input
        className={styles.input}
        id={'name'}
        type='text'
        placeholder={'Name...'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button disabled={title === ''} onClick={changeCategory} className={styles.button}>
        Change
      </button>
    </Popup>
  )
}

export default ChangeCategory
