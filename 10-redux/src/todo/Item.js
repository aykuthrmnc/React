import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../stores/todo";
import { modal } from "../utils";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    modal("edit-todo", todo);
  };

  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title} - {todo.user}
      </span>
      {todo.user === user.id && (
        <>
          <button onClick={editHandle}>Düzenle</button>
          <button onClick={deleteHandle}>Sil</button>
        </>
      )}
    </li>
  );
}
