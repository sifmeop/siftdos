import { FC } from 'react'
import styles from './CategoryList.module.scss'
import CategoryItem from '../CategoryItem/CategoryItem'
import { ICategory } from '../../models/category.interface'
import { AnimatePresence, motion } from 'framer-motion'

const CategoryList: FC<{ categories: ICategory[] }> = ({ categories }) => {
  return (
    <>
      {categories.length ? (
        <div>
          <AnimatePresence>
            <motion.h1
              key={'my-categories'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              className={'text-xl font-semibold mb-5'}
            >
              My Categories
            </motion.h1>
          </AnimatePresence>
          <div className={styles.categories}>
            <AnimatePresence>
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.h2
            key={'no-categories'}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className={'text-xl font-semibold'}
          >
            No categories
          </motion.h2>
        </AnimatePresence>
      )}
    </>
  )
}

export default CategoryList
