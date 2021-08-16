module.exports = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaVersion: 2020,
      },
      env: {
        browser: true,
        es6: true,
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      settings: {
        "import/resolver": {
          typescript: {
            extensions: [".ts"],
          },
        },
        "import/extensions": [".ts"],
      },
      rules: {
        ...require("./rules/typescript"),
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
