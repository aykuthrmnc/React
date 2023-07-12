const Header = ({ user }) => {
  return (
    <header className="flex items-center px-24 gap-x-24 pt-4 pb-10">
      <img className="w-[150px] h-[150px] rounded-full" src="/noAvatar.jpg" alt="profilePhoto" />
      <div>
        <div className="mb-4">
        <h1 className="text-[28px] font-light">{user.username}</h1>
        </div>
        <nav className="flex items-center gap-x-10">
          <div>
            <span className="font-semibold">{user.posts}</span> posts
          </div>
          <div>
            <span className="font-semibold">{user.followers.length}</span> followers
          </div>
          <div>
            <span className="font-semibold">{user.following.length}</span> following
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
