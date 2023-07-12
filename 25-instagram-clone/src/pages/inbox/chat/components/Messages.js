import Message from "./Message";
// import ScrollToBottom from "react-scroll-to-bottom";
import { useEffect, useRef } from "react";

const Messages = ({ messages }) => {
const messageRef = useRef()

  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  }, [messages]);

  return (
    <main ref={messageRef} className="h-[calc(100%-144px)] px-4 overflow-auto flex flex-col gap-y-2">
      <div className="mb-auto" />
      {messages.map((message, key) => (
        <Message message={message} key={key} />
      ))}
    </main>
  );
};

export default Messages;
