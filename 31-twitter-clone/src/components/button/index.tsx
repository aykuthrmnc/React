import classNames from "classnames";
import { ReactNode, createElement } from "react";

interface ButtonProps {
  as?: any;
  size?: "small" | "normal" | "large";
  variant?: "primary" | "white" | "white-outline";
  className?: string;
  children: ReactNode;
  [x: string]: any;
}

const Button = ({
  as = "button",
  size = "normal",
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  return createElement(
    as,
    {
      className: classNames("rounded-full flex items-center justify-center font-bold transition-all", {
        "px-4 h-8 text-sm": size === "small",
        "px-4 h-9": size === "normal",
        "px-4 h-[3.25rem] w-full text-[1.063rem]": size === "large",
        "text-white bg-[color:var(--color-primary)] hover:opacity-90": variant === "primary",
        "text-[color:var(--background-primary)] bg-[color:var(--color-base)]": variant === "white",
        "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]":
          variant === "white-outline",
        [className]: true,
      }),
      ...props,
    },
    children,
  );
};

export default Button;
