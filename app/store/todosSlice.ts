import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../models/todo.interface'

const initialState: { todos: ITodo[] } = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    renameTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            id: todo.id,
            title: action.payload.title,
            body: action.payload.body,
            category: action.payload.category,
            isCompleted: action.payload.isCompleted
          }
        }
        return todo
      })
    },
    clearTodosList: (state) => {
      state.todos = []
    }
  }
})

export const todosReducer = todosSlice.reducer
export const { addTodo, deleteTodo, renameTodo, clearTodosList } = todosSlice.actions
