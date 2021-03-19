// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: [
    'standard'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-template-curly-in-string': 0,
    'no-useless-escape': 0,
    'no-mixed-operators': 0
  }
}
