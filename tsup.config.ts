import { defineConfig } from "tsup";
import { copyFileSync } from "fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
  onSuccess: async () => {
    copyFileSync("src/tokens.css", "dist/tokens.css");
    copyFileSync("src/theme.css", "dist/theme.css");
  },
});
