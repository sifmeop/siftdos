import { editTodo } from '@/store/slices/todosSlice'
import { Category } from '@/types/category.interface'
import { Todo } from '@/types/todo.interface'
import { useAppDispatch } from './redux'

export const useEditTodo = (todo: Todo, title: string, description: string, category: Category) => {
  const dispatch = useAppDispatch()

  const handleEditTodo = () => {
    const renamedTodo: Todo = { id: todo.id, title, description, category, isCompleted: false }
    dispatch(editTodo(renamedTodo))
  }

  return { handleEditTodo }
}
