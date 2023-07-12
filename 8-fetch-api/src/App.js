import { useEffect } from "react";
import { PostService, UserService } from "./services";

function App() {
  useEffect(() => {
    PostService.getPosts().then((res) => console.log(res));
    PostService.getPostsDetails(2).then((res) => console.log(res));
    PostService.newPost({ userId: 3, title: "test", body: "test" }).then((res) => console.log(res));
    UserService.getUsers().then((res) => console.log(res));
  }, []);

  return <></>;
}

export default App;
