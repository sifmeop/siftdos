import { Todo } from '@/types/todo.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { todos: Todo[] } = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const { id, title, description, category, isCompleted } = action.payload

      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            title,
            description,
            category,
            isCompleted
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
export const { addTodo, deleteTodo, editTodo, clearTodosList } = todosSlice.actions
