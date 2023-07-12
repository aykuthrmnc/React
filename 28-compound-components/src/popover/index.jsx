import { Fragment } from "react";
import { createContext, createElement, useContext, useEffect, useRef, useState } from "react";

const PopoverContext = createContext();

const Popover = ({ as = Fragment, children, ...props }) => {
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);

  const button = children.find((c) => c.type === Popover.Button);
  const panel = children.find((c) => c.type === Popover.Panel);

  const data = {
    open,
    close: () => setOpen(false),
    toggle: () => setOpen(!open),
    buttonRef,
  };

  return createElement(
    as,
    props,
    <PopoverContext.Provider value={data}>
      {button}
      {open && panel}
    </PopoverContext.Provider>
  );
};

const Button = ({ as = "button", className = "", children, ...props }) => {
  const { open, toggle, buttonRef } = useContext(PopoverContext);
  return createElement(
    as,
    {
      ref: buttonRef,
      className: typeof className === "function" ? className({ open }) : className,
      onClick: () => {
        toggle();
      },
      ...props,
    },
    typeof children === "function" ? children({ open }) : children
  );
};

const Panel = ({ as = "nav", children, ...props }) => {
  const { close, buttonRef } = useContext(PopoverContext);
  const panelRef = useRef();
  useEffect(() => {
    const clickHandle = (e) => {
      if (!e.composedPath().includes(panelRef.current) && !e.composedPath().includes(buttonRef.current)) {
        close();
      }
    };
    document.addEventListener("click", clickHandle);

    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, []);

  return createElement(as, { ref: panelRef, ...props }, typeof children === "function" ? children({ close }) : children);
};

Popover.Button = Button;
Popover.Panel = Panel;
export default Popover;
