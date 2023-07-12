import classnames from "classnames";

const Button = ({ size, bgColor, textColor, children }: any) => {
  // <Button size="sm" textColor="text-white" bgColor="bg-blue-500">
  //   Deneme
  // </Button>
  return (
    <button
      className={classnames(`${bgColor} ${textColor} font-bold py-2 px-4 rounded`, {
        "text-xs": size === "sm",
        "text-xl": size === "lg",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
