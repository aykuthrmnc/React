import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./todo/Add";
import Header from "./todo/Header";
import TodoList from "./todo/List";
import Modal from "./todo/Modal";
import "./index.css";
import "./utils"

function App() {
  const dispatch = useDispatch();
  const { open: isModalOpen } = useSelector((state) => state.modal);

  const [language, setLanguage] = useState("tr"); // todo
  const [dark, setDark] = useState(true); // todo

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
