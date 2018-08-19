module.exports = {
  extends: [
    './node_modules/grumbler-scripts/config/.eslintrc-browser.js',
    'plugin:prettier/recommended'
  ],
  rules: {
    'promise/catch-or-return': 'off',
    complexity: 'off',
    'max-nested-callbacks': ['error', 5]
  }
};
