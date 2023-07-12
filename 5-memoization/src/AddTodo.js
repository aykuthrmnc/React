import { memo } from "react";

const AddTodo = ({ submitHandle, onChange, todo }) => {
  
  console.log("ADDTODO rendered");
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={onChange} />
      <button disabled={!todo} type="submit">
        Ekle
      </button>
    </form>
  );
};

export default memo(AddTodo);
