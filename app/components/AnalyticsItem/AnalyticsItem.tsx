import { FC } from 'react'
import { IAnalyticsItem } from '../../models/analyticsItem.interface'
import styles from './AnalyticsItem.module.scss'
import { motion } from 'framer-motion'

const AnalyticsItem: FC<{ item: IAnalyticsItem }> = ({ item }) => {
  return (
    <>
      <motion.button
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 0 }}
        key={item.count}
        className={styles.item}
      >
        <h1>{item.title}</h1>
        <p>{item.count}</p>
      </motion.button>
    </>
  )
}

export default AnalyticsItem
