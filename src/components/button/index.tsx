import { BasicProps } from "@app/types";
import { splitProps, JSX, Show } from "solid-js";
import { ElementType } from "@app/components/types";
import { Dynamic } from "solid-js/web";
import Spinner from "../spinner";
import { cva } from "class-variance-authority";

const button = cva(["animate-spin"], {
  variants: {
    color: {
      primary: ["dark:text-gray-600"],
    },
    size: {
      sm: ["w-2", "h-2"],
      md: ["w-4", "h-4"],
      lg: ["w-6", "h-6"],
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

interface ButtonOptions extends BasicProps {
  as?: ElementType;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
}

type ButtonProps<C extends ElementType> = ButtonOptions &
  JSX.ButtonHTMLAttributes<C>;

export default function Button<C extends ElementType = "button">(
  props: ButtonProps<C>
) {
  const [local, others] = splitProps(props, [
    "as",
    "loading",
    "disabled",
    "children",
  ]);

  return (
    <Dynamic
      component={local.as || "button"}
      class="px-3 py-2 inline-flex fill-white justify-center gap-2 items-center rounded bg-green-600 border border-green-700 text-white transition-all hover:bg-green-700 hover:border-green-800 disabled:bg-stone-200 disabled:border-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
      disabled={local.disabled}
      {...others}
    >
      <Show when={local.loading}>
        <Spinner />
      </Show>
      {local.children}
    </Dynamic>
  );
}
