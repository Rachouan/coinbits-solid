import { BasicProps } from "@app/types";
import { Component } from "solid-js";

interface ContainerProps extends BasicProps {
  size?: string;
}

const Container: Component<ContainerProps> = ({ size = "md", children }) => {
  const sizeClass: { [key: string]: string } = {
    xs: "max-w-md",
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
  };

  return (
    <div class={`container px-4 md:px-8 mx-auto ${sizeClass[size]} max-w`}>
      {children}
    </div>
  );
};

export default Container;
