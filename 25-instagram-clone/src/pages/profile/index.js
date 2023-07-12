import classNames from "classnames";
import Icon from "components/Icon";
import { getUserInfo } from "firebase.js";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Header from "./components/Header";
import ProfileNotFound from "./NotFound";
import { Helmet } from "react-helmet";

const ProfileLayout = () => {
  // const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { username } = useParams();
  // const navigate = useNavigate();


  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, [username]);

  if (user === false) {
    return <ProfileNotFound />;
  }

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <>
        <Helmet>
          <title>{user.fullname}  (@{user.username}) • Instagram photos and videos</title>
        </Helmet>
        <Header user={user} />
        <nav className="border-t flex items-center justify-center gap-x-16">
          <NavLink
            to={`/${username}/`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex items-center gap-x-1.5 font-semibold py-5 border-t tracking-widest -mt-px": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="post" size={12} /> POSTS
          </NavLink>
          <NavLink
            to={`/${username}/tagged/`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex items-center gap-x-1.5 font-semibold py-5 border-t tracking-widest -mt-px": true,
                "text-[#8e8e8e] border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon name="tag" size={12} /> TAGGED
          </NavLink>
        </nav>
        <Outlet />
      </>
    )
  );
};

export default ProfileLayout;
