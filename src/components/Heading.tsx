import { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren<{}>;

export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};
