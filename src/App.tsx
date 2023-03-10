import { Router } from "@solidjs/router";
import type { Component } from "solid-js";
import Root from "./root";

const App: Component = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};

export default App;
