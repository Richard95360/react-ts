import { FunctionComponent, PropsWithChildren } from "react";

type OscarProps = PropsWithChildren<{}>;

export const Oscar: FunctionComponent<OscarProps> = ({ children }) => {
  return <div>{children}</div>;
};
