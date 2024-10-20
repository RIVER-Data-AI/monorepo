import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
    globals: true,
    server: {
      deps: {
        inline: ["@fastify/autoload"],
      },
    },
  },
});
