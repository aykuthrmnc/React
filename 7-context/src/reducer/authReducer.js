export default function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      sessionStorage.removeItem("user");
      return {
        ...state,
        user: false,
      };
    default:
      break;
  }
}
