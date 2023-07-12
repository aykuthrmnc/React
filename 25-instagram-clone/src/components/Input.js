import { useField } from "formik";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Input = ({ label, type = "text", ...props }) => {
  const [field, meta, helpers] = useField(props);

  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show, type]);

  return (
    <label className="flex relative bg-zinc-50 border rounded-sm focus-within:border-gray-400 ">
      <input
        type={inputType}
        className={classNames({
          "px-2 w-full h-[38px] bg-transparent text-xs outline-none": true,
          "pt-[10px]": field.value,
        })}
        {...field}
        {...props}
      />
      <small
        className={classNames({
          "absolute left-[9px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all": true,
          "text-xs top-1/2": !field.value,
          "text-[10px] top-2.5": field.value,
        })}
      >
        {label}
      </small>
      {type === "password" && field.value && (
        <div onClick={() => setShow((show) => !show)} className="h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2">
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
};

export default Input;
