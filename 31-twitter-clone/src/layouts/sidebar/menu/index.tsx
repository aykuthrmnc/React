import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";

const Menu = () => {
  return (
    <nav className="mb-1 mt-0.5">
      {mainMenu.map((menu, key) => (
        <NavLink
          key={key}
          to={typeof menu.path === "function" ? menu.path() : menu.path}
          className="group block py-[0.188rem]"
        >
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex items-center gap-5 rounded-full p-3 transition-colors group-hover:bg-[color:var(--background-third)]",
                {
                  "font-bold": isActive,
                },
              )}
            >
              <div className="relative h-[1.641rem] w-[1.641rem]">
                {menu?.notification && (
                  <span className="absolute -right-1 -top-1.5 flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full border border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-[0.688rem] text-[color:var(--background-primary)]">
                    {menu.notification}
                  </span>
                )}
                {isActive ? menu.icon.active : menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}

      <More />
      <New />
    </nav>
  );
};
export default Menu;
