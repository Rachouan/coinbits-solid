import { BasicProps } from "@app/types";
import { Accessor, Component } from "solid-js";

interface ButtonProps extends BasicProps {
  disabled?: boolean;
  loading?: boolean;
}

const Button: Component<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <button
      class="px-3 py-2 rounded bg-green-600 border border-green-700 text-white transition-all hover:bg-green-700 hover:border-green-800"
      {...rest}
    >
      {loading ? "...loading" : children}
    </button>
  );
};

export default Button;
