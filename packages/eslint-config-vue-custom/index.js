module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 200,
        arrowParens: "always",
        orderedImports: true,
        bracketSpacing: true,
        bracketSameLine: true,
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["info", "error", "warn"],
      },
    ],
    "no-debugger": process.env.VITE_ENV === "production" ? "warn" : "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "no-undef": 0,
    "no-alert": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "no-use-before-define": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "no-shadow": 0,
    "import/no-dynamic-require": 0,
    "no-var-requires": 0,
    "no-empty-function": 0,
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    "@typescript-eslint/no-empty-function": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/consistent-type-imports": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["e", "state"],
      },
    ],
    "vue/attribute-hyphenation": 0,
    "vue/multi-word-component-names": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{vue*,axios}",
            group: "builtin",
            position: "after",
          },
          {
            pattern:
              "{@/assets/*,@/constants/*,@/domains/*,@/hooks/*,@/router/*,@/stores/*,@/utils/*}",
            group: "external",
            position: "after",
          },
          {
            pattern: "@/components/*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "{@/types/*,@storybook/*}",
            group: "type",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".vue", ".json"],
      },
    },
  },
};