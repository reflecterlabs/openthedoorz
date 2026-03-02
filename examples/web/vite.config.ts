import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [
    {
      name: "dash-route-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/dash") {
            res.statusCode = 302;
            res.setHeader("Location", "/dash/");
            res.end();
            return;
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/dash") {
            res.statusCode = 302;
            res.setHeader("Location", "/dash/");
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  server: {
    allowedHosts: ["localhost", ".trycloudflare.com"],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        dash: path.resolve(__dirname, "dash/index.html"),
        presentation: path.resolve(__dirname, "presentation.html"),
      },
    },
  },
  resolve: {
    alias: {
      starkzap: path.resolve(__dirname, "../../src/index.ts"),
      "@openthedoorz/sdk": path.resolve(__dirname, "../../src/index.ts"),
      "@": path.resolve(__dirname, "../../src"),
    },
  },
  optimizeDeps: {
    exclude: ["starkzap", "@openthedoorz/sdk"],
  },
});
