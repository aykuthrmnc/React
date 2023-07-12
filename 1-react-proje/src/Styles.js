import { Title } from "./Components";
import Bootstrap from "./Bootstrap";

function Styles() {
  return (
    <div className="App">
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme={"dark"}>{process.env.NODE_ENV}</Title>
      {process.env.NODE_ENV === "production" && (
        <>
          <h4>123</h4>
          <h5>456</h5>
        </>
      )}
      <Bootstrap />
    </div>
  );
}

export default Styles;
