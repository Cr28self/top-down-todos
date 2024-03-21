import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = path.resolve(__dirname,"src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "components": path.resolve(root, "components"),
      "mock":path.resolve(root,"mock")
    },
  },
});
