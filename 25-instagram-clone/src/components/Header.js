import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
// import { logout } from "firebase.js";
import Icon from "./Icon";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-white border-b border-gray-300">
      <div className="h-[60px] flex items-center justify-between container mx-auto">
        <Link to="/">
          <img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram" />
        </Link>
        <Search />

        <nav className="flex items-center gap-x-5">
          <NavLink to="/" end={true}>
            {({ isActive }) => <Icon name={isActive ? "homeFilled" : "home"} size={24} />}
          </NavLink>
          <NavLink to="/inbox">{({ isActive }) => (isActive ? <Icon name="directFilled" size={24} /> : <Icon name="direct" size={24} />)}</NavLink>
          <NavLink to="/">
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            {({ isActive }) => (
              <img
                className={classNames({
                  "w-6 h-6 rounded-full": true,
                  "ring-1 ring-offset-1 ring-black": isActive
                })}
                src="/noAvatar.jpg"
                // src={`${process.env.PUBLIC_URL}/noAvatar.jpg`}
                alt="profile"
              />
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
