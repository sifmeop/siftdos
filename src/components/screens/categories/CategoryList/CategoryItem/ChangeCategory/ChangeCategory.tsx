import Popup from '@/components/ui/Popup/Popup'
import { useAppDispatch } from '@/hooks/redux'
import { renameCategory } from '@/store/slices/categoriesSlice'
import { Category } from '@/types/category.interface'
import { memo, useState } from 'react'
import styles from './ChangeCategory.module.scss'

interface Props {
  category: Category
  onClose: () => void
}

const ChangeCategory = ({ category, onClose }: Props) => {
  const [title, setTitle] = useState<string>(category.title)
  const [color, setColor] = useState<string>(category.color)
  const dispatch = useAppDispatch()

  const changeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (category.title === title && category.color === color) {
      onClose()
      return false
    }
    dispatch(renameCategory({ id: category.id, title, color }))
    onClose()
  }

  return (
    <Popup onClose={() => onClose()}>
      <h1 className={styles.title}>Change Category</h1>
      <div className='flex items-center gap-3'>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={styles.colorPicker}
        />
        <input
          className={styles.input}
          id='name'
          type='text'
          placeholder='Name...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button disabled={title.trim() === ''} onClick={changeCategory} className={styles.button}>
          Change
        </button>
      </div>
    </Popup>
  )
}

export default memo(ChangeCategory)
