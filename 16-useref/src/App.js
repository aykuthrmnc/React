import { useRef, useEffect } from "react";
function App() {
  const inputRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    console.log(inputRef);
  });

  const onFocusButton = () => {
    inputRef.current.focus();
  };

  const onDivBorder = () => {
    divRef.current.style.border = "1px solid red";
  };

  return (
    <div ref={divRef} className="App">
      <input ref={inputRef} placeholder="Buraya yazınız" type="text" />
      <button onClick={onFocusButton}>Input'a focus ol</button>
      <button onClick={onDivBorder}>Div border ekle</button>
    </div>
  );
}

export default App;
