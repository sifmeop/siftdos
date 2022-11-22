import { FC } from 'react'
import Meta from '../app/utils/Meta'
import TodoList from '../app/components/TodoList/TodoList'
import CreateTodo from '../app/components/CreateTodo/CreateTodo'

const Index: FC = () => {
  return (
    <div>
      <Meta title={'Home'} description={'On this page you can view and create a todo'} />
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default Index
