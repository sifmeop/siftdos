import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../models/todo.interface'

interface ITodoState {
  deleted: ITodo[]
}

const initialState: ITodoState = {
  deleted: []
}

export const deletedSlice = createSlice({
  name: 'deleted',
  initialState,
  reducers: {
    deletedTodo: (state, action: PayloadAction<ITodo>) => {
      state.deleted.push(action.payload)
    },
    clearDeletedList: (state) => {
      state.deleted = []
    }
  }
})

export const deletedReducer = deletedSlice.reducer
export const { deletedTodo, clearDeletedList } = deletedSlice.actions
