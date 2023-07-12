import { useState } from "react";
import { add, remove, toggleCompleted } from "./features/todoSlice";
import { fetchUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  
  const todos = useSelector((state) => state.todos);
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const onDelete = (id) => {
    dispatch(remove(id));
  };

  const onToggle = (id) => {
    dispatch(toggleCompleted(id));
  };

  const currentUser = user.data && user.data.results[0];

  return (
    <div className="App">
      <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} name="title" type="text" />
      <button onClick={onSave}>Save</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => onToggle(todo.id)}>{todo.completed ? "Mark Not Completed" : "Mark Completed"}</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
        {user.loading && "Loading..."}
        {user.error && user.error}
        {currentUser && (
          <div>
            <p>Name: {currentUser.name.title} {currentUser.name.first} {currentUser.name.last}</p>
            <p>Email: {currentUser.email}</p>
            <p>Avatar: <img src={currentUser.picture.large} alt="" /></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
