import { Component, JSXElement } from "solid-js";

interface CardProps {
  children: JSXElement;
}

const Card: Component<CardProps> = ({ children }) => {
  return (
    <div class="p-4 md:p-6 rounded border border-stone-300 bg-white">
      {children}
    </div>
  );
};
export default Card;
