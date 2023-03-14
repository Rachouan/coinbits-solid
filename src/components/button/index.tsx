import { BasicProps } from "@app/types";
import { Component } from "solid-js";

interface ButtonProps extends BasicProps {
  disabled?: boolean;
  loading?: boolean;
}

const Button: Component<ButtonProps> = (props) => {
  return (
    <button class="px-3 py-2 rounded bg-green-600 border border-green-700 text-white transition-all hover:bg-green-700 hover:border-green-800">
      {props.loading ? "...loading" : props.children}
    </button>
  );
};

export default Button;
