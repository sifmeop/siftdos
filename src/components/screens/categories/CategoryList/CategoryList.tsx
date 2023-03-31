import { useAppSelector } from '@/hooks/redux'
import { AnimatePresence, motion } from 'framer-motion'
import CategoryItem from './CategoryItem/CategoryItem'
import styles from './CategoryList.module.scss'

const CategoryList = () => {
  const categories = useAppSelector((state) => state.categories.categories)

  return (
    <>
      {categories.length > 1 ? (
        <div>
          <AnimatePresence>
            <motion.h1
              key={'my-categories'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              className={'mb-5 text-xl font-semibold'}
            >
              My Categories
            </motion.h1>
          </AnimatePresence>
          <div className={styles.categories}>
            <AnimatePresence>
              {categories.slice(1).map((category) => (
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
