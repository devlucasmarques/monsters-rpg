module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
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
  },
  rules: {
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "no-global-assign": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".ts",
          ".tsx"
        ]
      }
    ],
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": [
      "error",
      {
        custom: "ignore"
      }
    ],
    "prettier/prettier": "error",
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [
      0,
      {
        ignoreExternal: true
      }
    ],
    "prefer-const": "off",
    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test.tsx",
          "**/*.test.tsx",
          "**/*.spec.ts",
          "**/stories.tsx",
          "**/utils/**/test*.ts*",
        ]
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false, classes: false, variables: true
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ],
      },
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ],
      },
    },
    "eslint.workingDirectories": [
      "./"
    ],
  },
};