import { Todo } from '@/types/todo.interface'
import { motion } from 'framer-motion'
import { memo } from 'react'
import styles from './TabItem.module.scss'

interface Props {
  item: Todo
  setTodo: (item: Todo) => void
}

const TabItem = ({ item, setTodo }: Props) => {
  return (
    <motion.h1
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      key={item.id}
      className={styles.item}
      onClick={() => setTodo(item)}
    >
      {item.title}
    </motion.h1>
  )
}

export default memo(TabItem)
