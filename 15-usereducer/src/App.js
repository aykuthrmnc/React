import { useReducer } from "react";
import reducer from "./reducer";

function App() {
  const initialState = {
    data: "",
    loading: "",
    error: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state;
  // const [data, setData] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const fetchDog = () => {
    dispatch({ type: "FETCH_START" });

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", error: "Error fetching data" });
      });
  };

  return (
    <>
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {data && (
        <div>
          <img src={data} alt="Random dog" />
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
