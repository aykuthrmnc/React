import store from "./stores";
import { login, logout } from "./stores/auth";
import { openModal } from "./stores/modal";
import { addTodo } from "./stores/todo";

export const addTodoHandle = (todo) => {
  // console.log(store.getState().todo.todos); // ilk hali
  store.dispatch(addTodo(todo));
  // console.log(store.getState().todo.todos); // son hali
};

export const loginHandle = (user) => {
  store.dispatch(login(user));
};

export const logoutHandle = () => {
  store.dispatch(logout());
};

export const modal = (name, data = false) => {
  store.dispatch(
    openModal({
      name,
      data,
    })
  );
};
