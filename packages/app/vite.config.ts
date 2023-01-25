import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig((env) => ({
  root: "./src",
  appType: env.mode === "development" ? "mpa" : "spa",
  plugins: [unocss(), react()],
}));
