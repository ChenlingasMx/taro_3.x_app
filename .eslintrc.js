module.exports = {
  'extends': ['taro/react'],
  "rules": {
    "import/prefer-default-export": off,
    "no-irregular-whitespace": 0,
    "no-trailing-spaces": 0,
    "no-unused-vars": [
      2,
      {
        "vars": "all",
        "args": "after-used"
      }
    ],
    "no-const-assign": 2,
    "no-func-assign": 2,
    "jsx-quotes": [
      2,
      "prefer-double"
    ],
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "max-depth": [
      2,
      3
    ],
    "max-len": 0,
    "indent": [
      2,
      2
    ],
    "id-match": 2,
    "no-debugger": 2,
    "no-alert": 2,
    "no-console": 2,
    "consistent-return": 0,
    "generator-star-spacing": 0,
    "global-require": 1,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-bitwise": 0,
    "no-cond-assign": 0,
    "no-else-return": 0,
    "no-nested-ternary": 0,
    "no-restricted-syntax": 0,
    "no-use-before-define": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js"
        ]
      }
    ],
    "react/jsx-no-bind": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "require-yield": 1,
    "class-methods-use-this": 0,
    "no-confusing-arrow": 0,
    "react/sort-comp": 0,
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "react/no-did-mount-set-state": 0,
    "no-undef": "off"
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  }
}
