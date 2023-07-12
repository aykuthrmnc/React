import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const InboxLayout = () => {
  return (
    <div className="border border-gray-300 bg-white rounded h-[calc(100vh-97px)] flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default InboxLayout;
