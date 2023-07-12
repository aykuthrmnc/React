import { useReducer, useState, useCallback, useMemo } from "react";
import todoReducer from "./reducers/todoReducer";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  console.log("APP rendered");

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "ADD_TODO",
        value: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) => todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")));
  }, [state.todos, state.search]);

  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Artır</button>
      <hr />
      <input type="text" placeholder="Ara" onChange={searchHandle} value={state.search} />
      {state.search}
      <hr />
      <h1>Todo App</h1>
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo} />
      <Todos todos={filteredTodos} />
    </>
  );
}

export default App;
