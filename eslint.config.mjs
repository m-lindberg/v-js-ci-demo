import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.jest     // ← Lägger till Jest-globaler här!
      }
    } 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      globals: {
        window: "readonly",
        document: "readonly"
      } 
    } 
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly"
      }
    }
  }
]);