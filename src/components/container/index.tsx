import { Component, JSX } from "solid-js";

const Container: Component<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return <div class="container px-4 md:px-8 mx-auto">{children}</div>;
};

export default Container;
