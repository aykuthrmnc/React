import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./stores";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
