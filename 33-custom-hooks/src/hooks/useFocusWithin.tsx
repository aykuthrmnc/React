import { useEffect, useRef, useState } from "react";

const useFocusWithin = () => {
  const [focused, setFocused] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    if (ref.current) {
      const focusInHandle = () => {
        setFocused(true);
      };

      const focusOutHandle = (e) => {
        if (!ref.current.contains(e.relatedTarget)) {
          setFocused(false);
        }
      };

      ref.current.addEventListener("focusin", focusInHandle);
      ref.current.addEventListener("focusout", focusOutHandle);

      return () => {
        ref.current.removeEventListener("focusin", focusInHandle);
        ref.current.removeEventListener("focusout", focusOutHandle);
      };
    }
  }, [ref]);

  return {
    focused,
    ref,
  };
};
export default useFocusWithin;
