import { configureStore } from "@reduxjs/toolkit";
import auth from "~/store/auth";
import modal from "~/store/modal";
import appearance from "~/store/appearance";

const store = configureStore({
  reducer: {
    auth,
    modal,
    appearance,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
