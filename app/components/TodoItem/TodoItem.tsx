import { FC, useState } from 'react'
import styles from './TodoItem.module.scss'
import { ITodo } from '../../models/todo.interface'
import { useTypedDispatch } from '../../hooks/redux'
import { deleteTodo } from '../../store/todosSlice'
import { completedTodo } from '../../store/completedSlice'
import Edit from '../../assets/images/edit.svg'
import Delete from '../../assets/images/delete.svg'
import Checkbox from '../UI/Checkbox/Checkbox'
import { deletedTodo } from '../../store/deletedSlice'
import { motion } from 'framer-motion'
import ChangeTodo from '../ChangeTodo/ChangeTodo'
import { adaptiveTextColor } from '../../utils/adaptiveTextColor'

interface ITodoProps {
  todo: ITodo
  index: number
}

const TodoItem: FC<ITodoProps> = ({ todo, index }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const dispatch = useTypedDispatch()
  const handlerDeleteTodo = () => {
    dispatch(deletedTodo(todo))
    dispatch(deleteTodo(todo.id))
  }

  const handlerCompletedTodo = () => {
    dispatch(completedTodo(todo))
    dispatch(deleteTodo(todo.id))
  }

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
                backgroundColor: todo.category?.color ?? '#ffffff',
                color: adaptiveTextColor(todo.category?.color)
              }}
              className={styles.todoTitle}
            >
              {todo.title}
            </h1>
          </div>
          <div className={styles.buttons}>
            <button>
              <Edit className={styles.button} onClick={() => setEdit(true)} />
            </button>
            <button>
              <Delete className={styles.button} onClick={handlerDeleteTodo} />
            </button>
          </div>
        </div>
        <div className={styles.bodyBlock}>
          <p className={styles.body}>{todo.body}</p>
          <Checkbox handlerCompletedTodo={handlerCompletedTodo} />
        </div>
      </motion.div>
      {edit && <ChangeTodo todo={todo} setEdit={setEdit} />}
    </>
  )
}

export default TodoItem
