import { FunctionComponent } from "react";

interface ILoadingProps {
  children: any;
  loading: boolean;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  if (props.loading) {
    return <>Loading...</>;
  }

  return <>{props.children}</>;
};

export default Loading;
