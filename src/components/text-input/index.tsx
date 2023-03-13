import { Component } from "solid-js";

interface TextInputProps {
  type?: string;
  placeholder?: string;
  focus?: boolean;
  value?: string;
  onChange: (value: string) => void;
  regex?: string;
  required?: boolean;
  classes: string;
}

const TextInput: Component<TextInputProps> = ({
  type = "text",
  focus,
  value = "",
  onChange,
  classes,
  ...rest
}) => {
  return (
    <input
      autofocus={focus}
      onChange={(e) => onChange(e.currentTarget.value)}
      class={`px-3 py-2 border rounded outline-none focus:ring-stone-200 focus:ring-4 focus:border-stone-500 transition-all ${classes}`}
      {...rest}
    />
  );
};
export default TextInput;
