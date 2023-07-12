import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types/user";

// export interface Todo {
//   id: string;
//   title: string;
//   completed: boolean;
// }

const initialState: UserState = {
    data: {} as User,
    loading: false,
    error: "",
  };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<string>) => {
    //   const newTodo = { id: 1, title: action.payload, completed: false };
    //   state.push(newTodo);
    // },
    // remove: (state, action: PayloadAction<string>) => {
    //   return state.filter((todo) => todo.id !== action.payload);
    // },
    // toggleCompleted: (state, action: PayloadAction<string>) => {
    //   return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    // },
  },
});

export default todoSlice.reducer;
// export const {} = todoSlice.actions;
