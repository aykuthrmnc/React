import { useSelector } from "react-redux";
import TodoItem from "./Item";

export default function TodoList() {
  // const todos = useDispatch((state) => state.todo.todos);
  const { todos } = useSelector((state) => state.todo);

  return (
    <ul>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </ul>
  );
}
