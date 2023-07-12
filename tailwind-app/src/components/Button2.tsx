import { ButtonSize, ButtonType } from "./theme";

const Button2 = ({ size, type, children }: any) => {
  // <Button size="xs" type="primary">Enable</Button>
  const classNames = ButtonType[type] + " " + ButtonSize[size];
  return <button className={classNames}>{children}</button>;
};
export default Button2;
