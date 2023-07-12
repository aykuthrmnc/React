import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

const ChatList = () => {
  const {conversationId} = useParams();

  const chats = [
    {
      id: 1,
      user: {
        avatar: "/profilePhoto.jpg",
        name: "Aykut Harmancı",
      },
      lastMessage: "Selam",
    },
    {
      id: 2,
      user: {
        avatar: "/profilePhoto.jpg",
        name: "Aykut Harmancı",
      },
      lastMessage: "Hey",
      unread: true,
    },
    {
      id: 3,
      user: {
        avatar: "/profilePhoto.jpg",
        name: "Aykut Harmancı",
      },
      lastMessage: "Bb",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">16 requests</button>
      </header>
      {chats.map((chat) => (
        <NavLink
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat?.unread,
            "!bg-[#efefef]": chat.id === +conversationId,
          })}
          key={chat.id}
          to={`/inbox/${chat.id}`}
        >
          <img className="w-14 h-14 rounded-full" src={chat.user.avatar} alt={chat.user.name} />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>{chat.lastMessage}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ChatList;
