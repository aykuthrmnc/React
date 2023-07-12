import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: v4(), title: action.payload, completed: false };
      state.push(newTodo);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      // console.log(current(state));
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, toggleCompleted } = todoSlice.actions;
