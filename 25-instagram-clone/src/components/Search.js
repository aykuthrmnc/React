import Icon from "./Icon";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[268px] relative group">
      <span
        className={classNames({
          "absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center": true,
          hidden: open,
        })}
      >
        <Icon name="search" />
      </span>
      <input
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="h-9 outline-none focus:pl-3 pl-9 rounded w-full bg-[#efefef]"
        type="text"
        placeholder="Search"
      />
      <button
        onClick={() => setOpen(false)}
        className={classNames({
          "absolute text-[#c7c7c7] top-0 right-0 h-9 w-9 items-center justify-center": true,
          flex: open,
          hidden: !open,
        })}
      >
        <AiFillCloseCircle size={16} />
      </button>
    </div>
  );
};

export default Search;
