export default {
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        pathGroups: [{ pattern: "@/**", group: "parent" }],
        alphabetize: { order: "asc" },
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    "sort-keys": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
