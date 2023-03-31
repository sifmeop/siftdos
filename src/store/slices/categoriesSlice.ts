import { Category } from '@/types/category.interface'
import { CategoryDefaultValue } from '@/utils/constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CategoriesState = {
  categories: Category[]
}

const initialState: CategoriesState = {
  categories: [CategoryDefaultValue]
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload)
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload)
    },
    renameCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.map((category) => {
        if (category.id === action.payload.id) {
          return { id: category.id, title: action.payload.title, color: action.payload.color }
        }
        return category
      })
    }
  }
})

export const categoriesReducer = categoriesSlice.reducer
export const { addCategory, deleteCategory, renameCategory } = categoriesSlice.actions
