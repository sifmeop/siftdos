import { Todo } from '@/types/todo.interface'
import { motion } from 'framer-motion'
import { memo } from 'react'
import style from './SelectedTodo.module.scss'

interface Props {
  selectedTodo: Todo
}

const SelectedTodo = ({ selectedTodo }: Props) => {
  const tableInfo = [
    { title: 'Title', todo: selectedTodo.title },
    { title: 'Description', todo: selectedTodo.description },
    { title: 'Category', todo: selectedTodo.category.title },
    { title: 'Completed', todo: selectedTodo.isCompleted ? 'Yes' : 'No' }
  ]

  return (
    <table className={style.table}>
      <tbody>
        {tableInfo.map((item) => (
          <motion.tr
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className={style.tr}
            key={item.title}
          >
            <td className={style.td}>{item.title}</td>
            <td className={style.td}>{item.todo}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(SelectedTodo)
