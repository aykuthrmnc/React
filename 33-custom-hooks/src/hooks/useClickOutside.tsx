import { useEffect, useRef } from "react";

const useClickOutside = (callback: Function) => {
  const ref = useRef();

  useEffect(() => {
    const clickHandle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", clickHandle);

    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, [ref]);

  return ref;
};
export default useClickOutside;
