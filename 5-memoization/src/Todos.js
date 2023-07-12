import { memo } from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  console.log("TODOS rendered");
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </ul>
  );
};

export default memo(Todos);
