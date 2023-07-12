import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    user: userSlice,
  },
});

export default store;
