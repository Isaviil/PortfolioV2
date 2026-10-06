import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "coverage"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": "off",
      "react/display-name": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/no-unescaped-entities": "warn",
      "react/no-unknown-property": "warn",

      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "space-infix-ops": "error",
      "keyword-spacing": ["error", { before: true, after: true }],
      "comma-dangle": ["error", "always-multiline"],

      eqeqeq: ["error", "always"],
      "no-console": "warn",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
    },
  },
  {
    files: ["*.config.{js,ts}", "eslint.config.js", "vite.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["electron/**/*.cjs"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
  },
  prettier,
);
