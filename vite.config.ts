import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// The production build is nested under /new/ so it can be deployed
// alongside the legacy static site, which keeps serving from the root.
// Dev/preview stay at "/" for a normal local workflow.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/new/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
