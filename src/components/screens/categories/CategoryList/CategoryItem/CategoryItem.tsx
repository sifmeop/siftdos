import { useAppDispatch } from '@/hooks/redux'
import { deleteCategory } from '@/store/slices/categoriesSlice'
import { Category } from '@/types/category.interface'
import { adaptiveTextColor } from '@/utils/adaptiveTextColor'
import { motion } from 'framer-motion'
import { memo, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import styles from './CategoryItem.module.scss'
import ChangeCategory from './ChangeCategory/ChangeCategory'

interface Props {
  category: Category
}

const CategoryItem = ({ category }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  return (
    <>
      <motion.div
        key={category.id}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 0 }}
        style={{ backgroundColor: category.color, color: adaptiveTextColor(category.color) }}
        className={styles.category}
      >
        {category.title}
        <div className={styles.editCategory}>
          <button>
            <MdEdit onClick={() => setOpen(true)} size='2rem' color='#ffffff' />
          </button>
          <button>
            <MdDelete
              onClick={() => dispatch(deleteCategory(category.id))}
              size='2rem'
              color='#ffffff'
            />
          </button>
        </div>
      </motion.div>
      {open && <ChangeCategory category={category} onClose={() => setOpen(false)} />}
    </>
  )
}

export default memo(CategoryItem)
