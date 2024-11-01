import { defineConfig } from "vite";

export default defineConfig({
  appType: "custom",
  build: {
    target: "",
    manifest: true,
    rollupOptions: {
      input: {
        "error-extension": "src/index.ts",
      },
    },
  },
  server: {
    watch: {},
  },
});
