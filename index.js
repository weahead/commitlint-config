module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['@weahead/commitlint-plugin-weahead'],
  rules: {
    'body-html': [2, 'never'],
    'header-html': [2, 'never'],
  },
};
