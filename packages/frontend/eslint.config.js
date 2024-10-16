import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import base from "../../eslint.base.mjs";
import importPlugin from "eslint-plugin-import";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  prettier,
  base,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
    plugins: {
      "sort-keys-fix": sortKeysFixPlugin,
    },
  },
  {
    ignores: [".next/*", ".storybook/*", "eslint.config.js"],
  },
);
