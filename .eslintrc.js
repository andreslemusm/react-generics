module.exports = {
  env: { node: true, es6: true },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      plugins: ["react", "react-hooks", "@typescript-eslint"],
      rules: {
        "line-comment-position": ["error", "above"],
        "multiline-comment-style": ["error", "starred-block"],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        /*
         * This two rules are unnecesary since React v17.0:
         * https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
         */
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
