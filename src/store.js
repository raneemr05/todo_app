import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './features/Todos/TodoSlice'

export const store = configureStore({
  reducer: {
    todos: TodoReducer
},
})