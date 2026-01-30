import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    }
  },

  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly"
      }
    },
    rules: {
      "no-undef": "off"
    }
  }
];
