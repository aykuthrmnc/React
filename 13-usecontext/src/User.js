import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const User = ({ user }) => {
  const { changeColor } = useContext(UserContext);

  return (
    <div style={{ backgroundColor: user.color }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      Color: <input value={user.color} onChange={(e) => changeColor(user.id, e.target.value)} type="text" />
    </div>
  );
};

export default User;
