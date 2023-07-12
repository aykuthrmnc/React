const Button = ({ type = "button", children, ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className="h-[30px] mt-1 px-2.5 w-full flex items-center justify-center gap-x-2 bg-brand font-medium text-white text-sm rounded disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
