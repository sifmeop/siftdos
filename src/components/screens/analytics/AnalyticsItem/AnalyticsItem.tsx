import { AnalyticItem } from '@/types/analyticItem.interface'
import { motion } from 'framer-motion'
import { memo } from 'react'
import styles from './AnalyticsItem.module.scss'

interface Props {
  item: AnalyticItem
}

const AnalyticsItem = ({ item }: Props) => {
  return (
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
  )
}

export default memo(AnalyticsItem)
