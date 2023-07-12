import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useInput = (key, INITIAL_STATE) => {
  const [storage, setStorage] = useLocalStorage(key, INITIAL_STATE);
  const [inputs, setInputs] = useState(storage);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setStorage(inputs);
  }, [inputs]);

  return [inputs, handleChange];
};
