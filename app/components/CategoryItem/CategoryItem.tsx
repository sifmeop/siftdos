import { FC, useState } from 'react'
import styles from './CategoryItem.module.scss'
import { ICategory } from '../../models/category.interface'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useTypedDispatch } from '../../hooks/redux'
import { deleteCategory } from '../../store/categoriesSlice'
import { motion } from 'framer-motion'
import ChangeCategory from '../ChangeCategory/ChangeCategory'
import { adaptiveTextColor } from '../../utils/adaptiveTextColor'

const CategoryItem: FC<{ category: ICategory }> = ({ category }) => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useTypedDispatch()

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
            <MdEdit onClick={() => setOpen(true)} size={'2rem'} color={'#ffffff'} />
          </button>
          <button>
            <MdDelete
              onClick={() => dispatch(deleteCategory(category.id))}
              size={'2rem'}
              color={'#ffffff'}
            />
          </button>
        </div>
      </motion.div>
      {open && <ChangeCategory category={category} setOpen={setOpen} />}
    </>
  )
}

export default CategoryItem
