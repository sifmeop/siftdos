import { editTodo } from '@/store/slices/todosSlice'
import { Todo } from '@/types/todo.interface'
import { CategoryDefaultValue } from '@/utils/constants'
import chroma from 'chroma-js'
import { useAppDispatch, useAppSelector } from './redux'

export const useTodoAdaptiveColor = (todo: Todo) => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categories.categories)

  const find = categories.find((category) => category.id === todo.category.id)

  if (!find) {
    const resetTodo: Todo = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      category: CategoryDefaultValue,
      isCompleted: false
    }
    dispatch(editTodo(resetTodo))
    return '#252525'
  }

  const luminance = chroma(find.color).luminance()

  return luminance > 0.5 ? '#252525' : '#eeeeee'
}
