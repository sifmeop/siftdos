import { completedTodo } from '@/store/slices/completedSlice'
import { deleteTodo } from '@/store/slices/todosSlice'
import { Todo } from '@/types/todo.interface'
import { useAppDispatch } from './redux'

export const useCompleteTodo = (todo: Todo) => {
  const dispatch = useAppDispatch()

  const handleCompleteTodo = () => {
    dispatch(completedTodo(todo))
    dispatch(deleteTodo(todo.id))
  }

  return { handleCompleteTodo }
}
