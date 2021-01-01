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
        "plugin:jsx-a11y/strict",
        "plugin:import/typescript",
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
      plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "@typescript-eslint",
        "import",
      ],
      rules: {
        "line-comment-position": ["error", "above"],
        "multiline-comment-style": ["error", "starred-block"],
        "sort-imports": [
          "error",
          {
            memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
          },
        ],
        "import/dynamic-import-chunkname": [
          "error",
          { webpackChunknameFormat: "[a-z]+" },
        ],
        "import/export": "error",
        "import/exports-last": "error",
        "import/first": "error",
        "import/group-exports": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-cycle": ["error", { ignoreExternal: true }],
        "import/no-default-export": "error",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": [
          "error",
          { optionalDependencies: false },
        ],
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-namespace": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
        "import/no-webpack-loader-syntax": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        /*
         * In the functional react world, you likely will never have a function
         * that actually cares about the this context. Refer to:
         * https://github.com/typescript-eslint/typescript-eslint/issues/2245#issuecomment-648712540
         */
        "@typescript-eslint/unbound-method": "off",
        /*
         * This two rules are unnecesary since React v17.0:
         * https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
         */
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        /*
         * This rule was deprecated in v6.1.0:
         * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
         */
        "jsx-a11y/label-has-for": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
