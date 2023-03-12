import { Component, JSXElement } from "solid-js";
import Container from "@app/components/container";

interface AppShellProps {
  children: JSXElement;
  navigation?: JSXElement;
}

const Shell: Component<AppShellProps> = ({ children, navigation }) => {
  return (
    <section class="flex h-screen min-h-fit">
      {navigation && (
        <aside class="w-72 hidden bg-white border-r border-stone-300 md:flex p-8">
          {navigation}
        </aside>
      )}
      <article class="flex-grow py-6 overflow-y-scroll">
        <Container>{children}</Container>
      </article>
    </section>
  );
};

export default Shell;
