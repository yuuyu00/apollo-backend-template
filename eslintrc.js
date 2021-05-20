module.exports = {
  extends: ["plugin:prettier/recommended"],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    "no-console": "warn",
    "no-return-await": "error",
  },
};
