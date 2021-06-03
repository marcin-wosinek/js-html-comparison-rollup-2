import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

const config = {
  input: "src/index.js",
  output: {
    format: "esm",
    file: "dist/index.js",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
      plugins: ["babel-plugin-transform-html-import-to-string"],
      extensions: [".js", ".html"],
    }),
    json(),
  ],
};

export default config;
