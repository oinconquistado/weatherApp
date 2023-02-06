import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA({ registerType: "autoUpdate" })],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    port: 3000,
  },
});
