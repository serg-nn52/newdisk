module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'newline-per-chained-call': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
  },
};
