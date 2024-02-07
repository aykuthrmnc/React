import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 z-[2] flex max-h-screen min-h-screen w-[275px] flex-col px-2">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
};
export default Sidebar;
