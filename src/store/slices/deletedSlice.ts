import { Todo } from '@/types/todo.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITodoState {
  deleted: Todo[]
}

const initialState: ITodoState = {
  deleted: []
}

export const deletedSlice = createSlice({
  name: 'deleted',
  initialState,
  reducers: {
    deletedTodo: (state, action: PayloadAction<Todo>) => {
      state.deleted.push(action.payload)
    },
    clearDeletedList: (state) => {
      state.deleted = []
    }
  }
})

export const deletedReducer = deletedSlice.reducer
export const { deletedTodo, clearDeletedList } = deletedSlice.actions
