module.exports = {
  "extends": ["wesbos"],
  "rules": {
    "no-console": 2,
    "import/no-unresolved": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "markers": ["/"]
        }
      }
    ]
  },
  "overrides": [
    {
      files: [`**/cypress/integration/**/*`, `**/cypress/support/**/*`],
      globals: {
        cy: false,
        Cypress: false,
      }
    }
  ]
}
