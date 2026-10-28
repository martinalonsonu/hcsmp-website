import { defineConfig } from "vitest/config";

const projectRoot = process.cwd();

export default defineConfig({
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "json-summary"],
      include: [
        "app/**/*.{ts,tsx}",
        "components/**/*.tsx",
        "hooks/**/*.ts",
        "utils/**/*.ts",
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
