import { useAppSelector } from '@/hooks/redux'
import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem/TodoItem'

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos)

  return (
    <>
      {todos.length ? (
        <>
          <AnimatePresence>
            <motion.h1
              key='todos-list'
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              className='mb-5 text-2xl font-semibold'
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
          key='no-todos-list'
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 10, opacity: 0 }}
          className='text-2xl font-semibold'
        >
          No todos
        </motion.h1>
      )}
    </>
  )
}

export default TodoList
