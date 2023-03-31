import { addTodo } from '@/store/slices/todosSlice'
import { Category } from '@/types/category.interface'
import { Todo } from '@/types/todo.interface'
import { useAppDispatch } from './redux'

export const useCreateTodo = (title: string, description: string, category: Category) => {
  const dispatch = useAppDispatch()

  const handleCreateTodo = () => {
    const newTodo: Todo = { id: Date.now(), title, description, category, isCompleted: false }
    dispatch(addTodo(newTodo))
  }

  return { handleCreateTodo }
}
