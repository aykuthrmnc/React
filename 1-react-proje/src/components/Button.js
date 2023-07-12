const Button = ({ children, variant = "secondary" }) => {
  return <button className="btn btn-primary">{children}</button>;
};

export default Button;
