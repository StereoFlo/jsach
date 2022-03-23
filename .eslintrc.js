module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  "plugins": ["@typescript-eslint", "typescript-sort-keys", "sort-keys-fix", "unused-imports", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "import/no-cycle": "error",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "warn",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
