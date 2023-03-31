import { useAppDispatch } from '@/hooks/redux'
import TabItem from '@/screens/analytics/TabItem/TabItem'
import { Todo } from '@/types/todo.interface'
import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import styles from './TodoTab.module.scss'

interface Props {
  todos: Todo[]
  clearList: unknown
  setSelectedTodo: (item: Todo) => void
}

const TodoTab = ({ todos, clearList, setSelectedTodo }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.tab}>
      {todos.length ? (
        <>
          <motion.button
            key='delete-list'
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            className={styles.clear}
            // @ts-ignore
            onClick={() => dispatch(clearList())}
          >
            <AiFillDelete size='1.8rem' />
            Clear list
          </motion.button>
          <AnimatePresence>
            {todos.map((item) => (
              <TabItem key={item.id} item={item} setTodo={setSelectedTodo} />
            ))}
          </AnimatePresence>
        </>
      ) : (
        <motion.h2
          key={'no-todos'}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 10, opacity: 0 }}
          className='text-xl font-semibold'
        >
          No todos
        </motion.h2>
      )}
    </div>
  )
}

export default memo(TodoTab)
