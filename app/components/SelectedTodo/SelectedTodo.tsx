import { FC } from 'react'
import { ITodo } from '../../models/todo.interface'
import style from './SelectedTodo.module.scss'
import { motion } from 'framer-motion'

const SelectedTodo: FC<{ todo: ITodo }> = ({ todo }) => {
  const tableInfo = [
    { title: 'Title', todo: todo.title },
    { title: 'Description', todo: todo.body },
    { title: 'Category', todo: todo.category.title }
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

export default SelectedTodo
