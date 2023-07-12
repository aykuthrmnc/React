import React from "react";
import User from "./User";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.name} user={user} />
      ))}
    </>
  );
};

export default UserList;
