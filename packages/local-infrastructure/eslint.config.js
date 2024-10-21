import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier/recommended";
import base from "../../eslint.base.mjs";
import importPlugin from "eslint-plugin-import";
import sortKeysFixPlugin from "eslint-plugin-sort-keys-fix";

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  prettier,
  base,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "sort-keys-fix": sortKeysFixPlugin,
    },
  },
  {
    ignores: ["eslint.config.js"],
  },
);
