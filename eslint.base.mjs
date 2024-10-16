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
        pathGroups: [
          { pattern: "@/**", group: "parent" },
        ],
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
  },
};
