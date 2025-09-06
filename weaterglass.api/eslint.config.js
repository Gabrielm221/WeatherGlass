import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"], // pastas ignoradas
  },
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
    },
  }
);