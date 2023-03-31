import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { categoriesReducer } from './slices/categoriesSlice'
import { completedReducer } from './slices/completedSlice'
import { deletedReducer } from './slices/deletedSlice'
import { todosReducer } from './slices/todosSlice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  categories: categoriesReducer,
  todos: todosReducer,
  completed: completedReducer,
  deleted: deletedReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
