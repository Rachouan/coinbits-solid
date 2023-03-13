import { BasicProps } from "@app/types";
import { Component } from "solid-js";

interface AppLoaderProps extends BasicProps {
  loading?: boolean;
}

const AppLoader: Component<AppLoaderProps> = ({ loading, children }) => {
  if (loading)
    return (
      <div class="w-full h-screen flex items-center justify-center">
        ...Loading
      </div>
    );
  return children;
};

export default AppLoader;
