import { useAppSelector } from '@/hooks/redux'
import SelectedTodo from '@/screens/analytics/SelectedTodo/SelectedTodo'
import TodoTab from '@/screens/analytics/TodoTab/TodoTab'
import { clearCompletedList } from '@/store/slices/completedSlice'
import { clearDeletedList } from '@/store/slices/deletedSlice'
import { clearTodosList } from '@/store/slices/todosSlice'
import { AnalyticItem } from '@/types/analyticItem.interface'
import { Todo } from '@/types/todo.interface'
import { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import styles from './Analytics.module.scss'
import AnalyticsItem from './AnalyticsItem/AnalyticsItem'

const Analytics = () => {
  const [selectedTodo, setSelectedTodo] = useState<Todo>()

  const todos = useAppSelector((state) => state.todos.todos)
  const completed = useAppSelector((state) => state.completed.completed)
  const deleted = useAppSelector((state) => state.deleted.deleted)

  const todosItems: AnalyticItem[] = [
    { title: 'Total todos', count: todos.length, tab: todos },
    { title: 'Completed todos', count: completed.length, tab: completed },
    { title: 'Deleted todos', count: deleted.length, tab: deleted }
  ]

  return (
    <Tabs defaultIndex={0}>
      <TabList className={styles.tabList}>
        {todosItems.map((item) => (
          <Tab className={styles.tabItem} selectedClassName={styles.tabItemActive} key={item.title}>
            <AnalyticsItem item={item} />
          </Tab>
        ))}
      </TabList>
      <div className='mb-5'>
        <TabPanel>
          <TodoTab
            todos={todos}
            clearList={() => clearTodosList()}
            setSelectedTodo={setSelectedTodo}
          />
        </TabPanel>
        <TabPanel>
          <TodoTab
            todos={completed}
            clearList={() => clearCompletedList()}
            setSelectedTodo={setSelectedTodo}
          />
        </TabPanel>
        <TabPanel>
          <TodoTab
            todos={deleted}
            clearList={() => clearDeletedList()}
            setSelectedTodo={setSelectedTodo}
          />
        </TabPanel>
      </div>
      {selectedTodo && <SelectedTodo selectedTodo={selectedTodo} />}
    </Tabs>
  )
}

export default Analytics
