import { FC } from 'react'
import styles from './TodoList.module.scss'
import { useTypedSelector } from '../../hooks/redux'
import TodoItem from '../TodoItem/TodoItem'
import { AnimatePresence, motion } from 'framer-motion'

const TodoList: FC = () => {
  const { todos } = useTypedSelector((state) => state.todos)
  return (
    <div className={styles.todos}>
      {todos.length ? (
        <>
          <AnimatePresence>
            <motion.h1
              key={'no-todos-list'}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              className={'text-2xl font-semibold mb-5'}
            >
              My todos
            </motion.h1>
            {todos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
          </AnimatePresence>
        </>
      ) : (
        <motion.h1
          key={'no-todos-list'}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 10, opacity: 0 }}
          className={'text-2xl font-semibold'}
        >
          No todos
        </motion.h1>
      )}
    </div>
  )
}

export default TodoList
