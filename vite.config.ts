import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { compilerOptions } from "./tsconfig.json";

import { resolve } from "path";

const alias = Object.entries(compilerOptions.paths).reduce(
  (acc, [key, [value]]) => {
    const aliasKey = key.substring(0, key.length - 2);
    const path = value.substring(0, value.length - 2);
    return {
      ...acc,
      [aliasKey]: resolve(__dirname, path),
    };
  },
  {}
);

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias,
  },
  build: {
    target: "esnext",
  },
});
