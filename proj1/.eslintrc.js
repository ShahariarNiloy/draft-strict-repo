const path = require("path");
module.exports ={
   "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    "project": path.join(__dirname, "tsconfig.json"),
    tsconfigRootDir:__dirname
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  "rules": {
    // TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      }
    ],

    // React
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": "warn",
    "react/no-unescaped-entities": "error",
    "react/no-unstable-nested-components": "error",
    "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ],
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
    }],

    // Accessibility
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["hrefLeft", "hrefRight"],
        "aspects": ["invalidHref", "preferButton"]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/aria-role": "error",

    // Next.js
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-img-element": "error",
    "@next/next/no-unwanted-polyfillio": "error",
    "@next/next/no-sync-scripts": "error",
    "@next/next/no-script-component-in-head": "error",

    // Import
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ],
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",

    // General JavaScript
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-debugger": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "prefer-const": "error",
    "no-var": "error",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],
    "no-nested-ternary": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "warn"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
      }
    },
    {
      "files": ["./src/**/page.tsx","./src/**/layout.tsx", "./src/app/api/**/*.ts"],
      "rules": {
        "import/no-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/function-component-definition":"off"
      }
    }
  ]
}