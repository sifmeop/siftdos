import { deletedTodo } from '@/store/slices/deletedSlice'
import { deleteTodo } from '@/store/slices/todosSlice'
import { Todo } from '@/types/todo.interface'
import { useAppDispatch } from './redux'

export const useDeleteTodo = (todo: Todo) => {
  const dispatch = useAppDispatch()

  const handleDeleteTodo = () => {
    dispatch(deletedTodo(todo))
    dispatch(deleteTodo(todo.id))
  }

  return { handleDeleteTodo }
}
