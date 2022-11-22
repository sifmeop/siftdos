import { ICategory } from './category.interface'

export interface ITodo {
  id: number
  title: string
  body: string
  category: ICategory
  isCompleted: boolean
}
