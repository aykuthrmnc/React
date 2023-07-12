import { useRoutes } from "react-router-dom";
import routes from "./routes";
// import { url } from "./utils";

function App() {
  // console.log(generatePath("/post/:id/:url", { id: 2, url: "test-url" }));
  // console.log(url("home.blog.post", { id: 3, url: "test-konya" }));

  return useRoutes(routes);
}

export default App;
