import Delete from '@/assets/images/delete.svg'
import Edit from '@/assets/images/edit.svg'
import { useCompleteTodo } from '@/hooks/useCompleteTodo'
import { useDeleteTodo } from '@/hooks/useDeleteTodo'
import { useTodoAdaptiveColor } from '@/hooks/useTodoAdaptiveColor'
import ChangeTodo from '@/screens/home/TodoList/TodoItem/ChangeTodo/ChangeTodo'
import { Todo } from '@/types/todo.interface'
import Checkbox from '@/ui/Checkbox/Checkbox'
import { motion } from 'framer-motion'
import { memo, useState } from 'react'
import styles from './TodoItem.module.scss'

interface Props {
  todo: Todo
  index: number
}

const TodoItem = ({ todo, index }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const { handleCompleteTodo } = useCompleteTodo(todo)
  const { handleDeleteTodo } = useDeleteTodo(todo)
  const color = useTodoAdaptiveColor(todo)

  return (
    <>
      <motion.div
        key={'todo'}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 0 }}
        className={styles.todo}
      >
        <div className={styles.todoItem}>
          <div className={styles.title}>
            <h2 className={styles.todoIndex}>{index + 1}</h2>
            <h1
              style={{
                backgroundColor: todo.category.color,
                color
              }}
              className={styles.todoTitle}
              title={todo.title}
            >
              {todo.title}
            </h1>
          </div>
          <div className={styles.buttons}>
            <button>
              <Edit className={styles.button} onClick={() => setOpen(true)} />
            </button>
            <button>
              <Delete className={styles.button} onClick={handleDeleteTodo} />
            </button>
          </div>
        </div>
        <div className={styles.bodyBlock}>
          <p className={styles.body}>{todo.description}</p>
          <Checkbox handlerCompletedTodo={handleCompleteTodo} />
        </div>
      </motion.div>
      {isOpen && <ChangeTodo todo={todo} onClose={() => setOpen(false)} />}
    </>
  )
}

export default memo(TodoItem)
