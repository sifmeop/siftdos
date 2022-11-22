import { FC } from 'react'
import Meta from '../../app/utils/Meta'
import ColorPicker from '../../app/components/ColorPicker/ColorPicker'
import { useTypedSelector } from '../../app/hooks/redux'
import styles from './Categories.module.scss'
import CategoryList from '../../app/components/CategoryList/CategoryList'

const Categories: FC = () => {
  const { categories } = useTypedSelector((state) => state.categories)
  return (
    <>
      <Meta title={'Categories'} description={'Create or change a todos category'} />
      <div className={styles.block}>
        <h1 className={'text-2xl font-semibold mb-5'}>Create Category</h1>
        <ColorPicker />
        <CategoryList categories={categories} />
      </div>
    </>
  )
}

export default Categories
