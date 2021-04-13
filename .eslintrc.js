module.exports = {
  extends: ['taro/react'],
  rules: {
    'import/no-commonjs': 0,
    'no-commonjs': 0,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
