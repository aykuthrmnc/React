import classNames from "classnames";
import { useState } from "react";

const Dropdown = ({ options, onOptionSelect }: any) => {
  const [isActive, setActive] = useState(false);

//   <Dropdown
//     options={["Edit", "Duplicate", "Archive", "Move", "Delete"]}
//     onOptionSelect={(option: any) => {
//       console.log("Selected Option", option);
//     }}
//   />

  return (
    <div className="relative">
      <button
        onClick={() => setActive(!isActive)}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150"
      >
        Options
      </button>
      <div
        className={classNames("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg", {
          block: isActive,
          hidden: !isActive,
        })}
      >
        {options.map((option: any) => (
          <div key={option} onClick={() => onOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
