import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";
import WhoFollow from "./who-follow";

const Rightbar = () => {
  return (
    <aside className="mr-2.5 w-[350px]">
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </aside>
  );
};
export default Rightbar;
