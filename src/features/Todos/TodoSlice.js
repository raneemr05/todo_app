import { createSlice } from "@reduxjs/toolkit";

const initialState = 
[
  { id: "1", content: "Content 1", date: "25-04-2023", completed: "false" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
    console.log(action.payload)
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, content, date } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.content= content;
        existingTodo.date = date;
      }
    },
    completedTodo: (state, action) => {
        const { id} = action.payload;
        const existingTodo = state.find((todo) => todo.id === id);
        if (existingTodo.completed === "false") {
          existingTodo.completed= "true";
        }
      },
    deleteTodo: (state, action) => {
        const {id} = action.payload;
        const existingTodo = state.find((todo) => todo.id === id);
        if(existingTodo)
        {
            return state.filter(todos => todos.id !== id);
        }

    }
  },
});

export const { addTodo, editTodo, deleteTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
