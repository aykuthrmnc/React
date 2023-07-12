import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("Aykut");
  const [avatar, setAvatar] = useState(false);
  const [users, setUsers] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    addPost({
      userId: 1,
      title: "Ornek Post",
      body: "Post İcerigi",
    });
  }, []);

  const addPost = (data) => {
    const headers = new Headers();
    // headers.append("Content-Type", "application/json")
    headers.append("Authorization", "bearer aykut12345");

    const formData = new FormData();
    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // body: JSON.stringify(data),
      body: formData,
      headers,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const data = {
      name,
      avatar
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="file" name="avatar" onChange={(e) => setAvatar(e.target.files[0])} />
        <br />
        <button type="submit" disabled={!name || !avatar}>Kaydet</button>
      </form>

      <h1>User List</h1>
      {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
    </>
  );
}

export default App;
