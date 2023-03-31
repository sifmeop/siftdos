import { Todo } from '@/types/todo.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoState = {
  completed: Todo[]
}

const initialState: TodoState = {
  completed: []
}

export const completedSlice = createSlice({
  name: 'completed',
  initialState,
  reducers: {
    completedTodo: (state, action: PayloadAction<Todo>) => {
      state.completed.push(action.payload)
    },
    clearCompletedList: (state) => {
      state.completed = []
    }
  }
})

export const completedReducer = completedSlice.reducer
export const { completedTodo, clearCompletedList } = completedSlice.actions
