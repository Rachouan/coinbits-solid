import { Component, JSXElement } from "solid-js";
import Container from "@app/components/container";

interface AppShellProps {
  children: JSXElement;
  navigation?: JSXElement;
}

const AppShell: Component<AppShellProps> = ({ children, navigation }) => {
  return (
    <section class="flex min-h-screen bg-stone-50">
      {navigation && (
        <aside class="w-72 hidden bg-white border-r md:block">
          {navigation}
        </aside>
      )}
      <article class="flex-grow">
        <Container>{children}</Container>
      </article>
    </section>
  );
};

export default AppShell;
