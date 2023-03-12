import { BasicProps } from "@app/types";
import { Link } from "@solidjs/router";
import { Component } from "solid-js";

interface SideBarProps extends BasicProps {}

const SideBar: Component<SideBarProps> = ({}) => {
  return (
    <div class="flex flex-col flex-grow justify-between">
      <h1 class="text-2xl font-bold">
        <Link href="/">Coinbits</Link>
      </h1>
      <div></div>
    </div>
  );
};
export default SideBar;
