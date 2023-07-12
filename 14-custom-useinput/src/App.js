import { useInput } from "./hooks/useInput";

function App() {
  const INITIAL_STATE = { name: "", age: "", email: "", question: "" };
  const [inputs, setInputs] = useInput("inputs", INITIAL_STATE);

  return (
    <div className="form">
      <label htmlFor="name">
        Name: <input value={inputs.name} onChange={setInputs} name="name" type="text" />
      </label>
      <label htmlFor="age">
        Age: <input value={inputs.age} onChange={setInputs} name="age" type="text" />
      </label>
      <label htmlFor="email">
        Email: <input value={inputs.email} onChange={setInputs} name="email" type="text" />
      </label>
      <label htmlFor="Security Question">
        Question: <input value={inputs.question} onChange={setInputs} name="question" type="text" />
      </label>
    </div>
  );
}

export default App;
