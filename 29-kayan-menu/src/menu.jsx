import { useState, createContext, useContext, useRef, useEffect } from "react";

const MenuContext = createContext();

const Menu = ({ children, current = 0, onChange, variant = "menu" }) => {
  const [position, setPosition] = useState({});
  const [active, setActive] = useState(current);
  const ref = useRef();

  useEffect(() => {
    // let el = ref.current?.querySelector(`button:nth-child(${active + 1})`);
    let el = ref.current?.children[active];
    // [...ref.current.querySelectorAll("button")].forEach((button) => button.classList.remove("active"));
    el.classList.add("active");
    onChange?.(active);
    return () => {
      el.classList.remove("active");
    };
  }, [active]);

  useEffect(() => {
    const el = ref.current.querySelector(".active");
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      const left = el.offsetLeft;
      const top = el.offsetTop;
      setPosition({ left, top, width, height });
    }
  }, []);

  return (
    <MenuContext.Provider value={{ position, setPosition, setActive }}>
      <nav className={variant} ref={ref}>
        {children}
        {Object.values(position).length > 0 && <Menu.Divider />}
      </nav>
    </MenuContext.Provider>
  );
};

Menu.Divider = () => {
  const { position } = useContext(MenuContext);
  return (
    <div
      className="divider"
      style={{
        "--left": position.left + "px",
        "--top": position.top + "px",
        "--width": position.width + "px",
        "--height": position.height + "px",
      }}
    />
  );
};

Menu.Item = ({ children, ...props }) => {
  const { setPosition, setActive } = useContext(MenuContext);

  const clickHandle = (e) => {
    setActive([...e.target.parentElement.children].indexOf(e.target));
    const { width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    const top = e.target.offsetTop;
    setPosition({ left, top, width, height });
  };

  return (
    <button onClick={clickHandle} {...props}>
      {children}
    </button>
  );
};

export default Menu;