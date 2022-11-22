import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../models/category.interface'

const initialState: { categories: ICategory[] } = {
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.categories.push(action.payload)
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload)
    },
    renameCategory: (state, action: PayloadAction<ICategory>) => {
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
