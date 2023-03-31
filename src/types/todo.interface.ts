import { Category } from './category.interface'

export interface Todo {
  id: number
  title: string
  description: string
  category: Category
  isCompleted: boolean
}
