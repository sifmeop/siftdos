import styles from './Categories.module.scss'
import CategoryList from './CategoryList/CategoryList'
import ColorPicker from './ColorPicker/ColorPicker'

const Categories = () => {
  return (
    <div className={styles.block}>
      <h1 className='mb-5 text-2xl font-semibold'>Create Category</h1>
      <ColorPicker />
      <CategoryList />
    </div>
  )
}

export default Categories
