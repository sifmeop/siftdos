import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../models/todo.interface'

interface ITodoState {
  completed: ITodo[]
}

const initialState: ITodoState = {
  completed: []
}

export const completedSlice = createSlice({
  name: 'completed',
  initialState,
  reducers: {
    completedTodo: (state, action: PayloadAction<ITodo>) => {
      state.completed.push(action.payload)
    },
    clearCompletedList: (state) => {
      state.completed = []
    }
  }
})

export const completedReducer = completedSlice.reducer
export const { completedTodo, clearCompletedList } = completedSlice.actions
