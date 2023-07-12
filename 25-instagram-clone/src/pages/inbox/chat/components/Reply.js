import Icon from "components/Icon";
import { useState } from "react";
// import TextAreaAutoSize from "react-textarea-autosize";

const Reply = ({ setMessages }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      {
        from: {
          id: "b8Lka1oEyTZGmK6nSCmE0smdOgu2",
          name: "Aykut Hrmnc",
          username: "aykut",
          avatar: "/profilePhoto.jpg",
        },
        message,
      },
    ]);

    setMessage("");
  };

  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <form onSubmit={sendMessage} className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
          <Icon name="emoji" size={24} />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 h-[40px] text-sm outline-none px-[9px] placeholder:text-gray-500 focus:placeholder:text-gray-300"
          type="text"
          placeholder="Message..."
        />
        {!message && (
          <>
            <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
              <Icon name="picture" size={24} />
            </button>
            <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
              <Icon name="heart" size={24} />
            </button>
          </>
        )}
        {message && (
          <button type="submit" className="text-brand font-semibold text-sm px-3">
            Send
          </button>
        )}
      </form>
    </footer>
  );
};

export default Reply;
