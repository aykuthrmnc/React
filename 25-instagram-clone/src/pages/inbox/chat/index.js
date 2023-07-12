import { useState } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Reply from "./components/Reply";

const Chat = () => {
  const user = {
    name: "Aykut Harmancı",
    avatar: "/profilePhoto.jpg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "sdasda dsadsaasd sdasdsad  sdasdasad dsaasd ssd  sd sd dss d sdsds  sdsds d sa sds sda asddsa dsa dsa d sad sa dsa ds",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "sdasda dsadsaasd sdasdsad  sdasdasad dsaasd ssd  sd sd dss d sdsds  sdsds d sa sds sda asddsa dsa dsa d sad sa dsa ds",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "dtl2FvwAPIYKSHnHviZ1asGjBv73",
        name: "Aykut Harmancı",
        username: "a",
        avatar: "/noAvatar.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
        name: "Aykut Hrmnc",
        username: "aykut",
        avatar: "/profilePhoto.jpg",
      },
      message: "sdasda dsadsaasd sdasdsad  sdasdasad dsaasd ssd  sd sd dss d sdsds  sdsds d sa sds sda asddsa dsa dsa d sad sa dsa ds",
    },
  ]);

  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply setMessages={setMessages} />
    </div>
  );
};

export default Chat;
