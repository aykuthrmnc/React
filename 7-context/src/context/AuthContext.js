import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
  // const [state, dispatch] = useReducer(authReducer, {
  //   user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : false,
  // });

  const data = {
    // ...state,
    // dispatch,
    user,
    setUser,
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
