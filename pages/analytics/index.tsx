import { FC, useState } from 'react'
import Meta from '../../app/utils/Meta'
import { useTypedDispatch, useTypedSelector } from '../../app/hooks/redux'
import { IAnalyticsItem } from '../../app/models/analyticsItem.interface'
import { clearCompletedList } from '../../app/store/completedSlice'
import { clearDeletedList } from '../../app/store/deletedSlice'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import AnalyticsItem from '../../app/components/AnalyticsItem/AnalyticsItem'
import styles from './Analytics.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillDelete } from 'react-icons/ai'
import { clearTodosList } from '../../app/store/todosSlice'
import TabItem from '../../app/components/TabItem/TabItem'
import SelectedTodo from '../../app/components/SelectedTodo/SelectedTodo'
import { ITodo } from '../../app/models/todo.interface'

const Analytics: FC = () => {
  const { todos } = useTypedSelector((state) => state.todos)
  const { completed } = useTypedSelector((state) => state.completed)
  const { deleted } = useTypedSelector((state) => state.deleted)
  const [todo, setTodo] = useState<ITodo>()

  const dispatch = useTypedDispatch()

  const todosItems: IAnalyticsItem[] = [
    { title: 'Total todos', count: todos.length, tab: todos },
    { title: 'Completed todos', count: completed.length, tab: completed },
    { title: 'Deleted todos', count: deleted.length, tab: deleted }
  ]

  return (
    <div>
      <Meta
        title={'Analytics'}
        description={'Todos of your completed and deleted tasks and their statistics'}
      />
      <Tabs defaultIndex={0}>
        <TabList className={styles.tabList}>
          {todosItems.map((item) => (
            <Tab key={item.title}>
              <AnalyticsItem item={item} />
            </Tab>
          ))}
        </TabList>
        <div className={styles.statistics}>
          <div className={'mb-5'}>
            <TabPanel>
              <ul className={styles.tabPanel}>
                {todos.length ? (
                  <>
                    <motion.button
                      key={'delete-list'}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className={styles.clear}
                      onClick={() => dispatch(clearTodosList())}
                    >
                      <AiFillDelete size={'1.8rem'} />
                      Clear list
                    </motion.button>
                    <AnimatePresence>
                      {todos.map((item) => (
                        <TabItem key={item.id} item={item} setTodo={setTodo} />
                      ))}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.h2
                    key={'no-todos'}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    className={'text-xl font-semibold'}
                  >
                    No todos
                  </motion.h2>
                )}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className={styles.tabPanel}>
                {completed.length ? (
                  <>
                    <motion.button
                      key={'delete-list'}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className={styles.clear}
                      onClick={() => dispatch(clearCompletedList())}
                    >
                      <AiFillDelete size={'1.8rem'} />
                      Clear list
                    </motion.button>
                    <AnimatePresence>
                      {completed.map((item) => (
                        <TabItem key={item.id} item={item} setTodo={setTodo} />
                      ))}
                    </AnimatePresence>
                  </>
                ) : (
                  <AnimatePresence>
                    <motion.li
                      key={'no-todos-completed'}
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className={'text-xl font-semibold'}
                    >
                      No todos
                    </motion.li>
                  </AnimatePresence>
                )}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className={styles.tabPanel}>
                {deleted.length ? (
                  <>
                    <motion.button
                      key={'delete-list'}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className={styles.clear}
                      onClick={() => dispatch(clearDeletedList())}
                    >
                      <AiFillDelete size={'1.8rem'} />
                      Clear list
                    </motion.button>
                    <AnimatePresence>
                      {deleted.map((item) => (
                        <TabItem key={item.id} item={item} setTodo={setTodo} />
                      ))}
                    </AnimatePresence>
                  </>
                ) : (
                  <AnimatePresence>
                    <motion.li
                      key={'no-todos-deleted'}
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 10, opacity: 0 }}
                      className={'text-xl font-semibold'}
                    >
                      No todos
                    </motion.li>
                  </AnimatePresence>
                )}
              </ul>
            </TabPanel>
          </div>
          {todo && <SelectedTodo todo={todo} />}
        </div>
      </Tabs>
    </div>
  )
}

export default Analytics
