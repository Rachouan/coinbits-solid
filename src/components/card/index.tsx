import { Component, JSXElement } from "solid-js";

interface CardProps {
  children: JSXElement;
  className?: string;
}

const Card: Component<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      class={`p-4 md:p-5 rounded border border-stone-300 bg-white ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
