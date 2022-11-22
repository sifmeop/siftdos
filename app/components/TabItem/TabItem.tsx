import { FC } from 'react'
import styles from './TabItem.module.scss'
import { motion } from 'framer-motion'
import { ITodo } from '../../models/todo.interface'

interface TabItemProps {
  item: ITodo
  setTodo: (item: ITodo) => void
}

const TabItem: FC<TabItemProps> = ({ item, setTodo }) => {
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

export default TabItem
