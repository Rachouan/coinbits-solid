import Shell from "@app/components/shell";
import { Component } from "solid-js";
import { BasicProps } from "@app/types";
import SideBar from "../sidebar";

const AppShell: Component<BasicProps> = ({ children }) => {
  return <Shell navigation={<SideBar />}>{children}</Shell>;
};

export default AppShell;
