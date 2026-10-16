import { defineConfig } from "vitest/config";

const projectRoot = process.cwd();

export default defineConfig({
  esbuild: { jsx: "automatic" },
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "json-summary"],
      include: [
        "utils/**/*.ts",
        "hooks/**/*.ts",
        "components/shared/**/*.tsx",
        "components/archivo/archive-filter.tsx",
        "components/home/home-hero.tsx",
        "components/home/multimedia-carousel.tsx",
        "components/seo/json-ld.tsx",
      ],
      exclude: ["**/*.test.{ts,tsx}", "**/*.d.ts"],
      thresholds: {
        branches: 75,
        functions: 75,
        lines: 75,
        statements: 75,
      },
    },
  },
});
