module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-debugger": "off",
    "no-console": "off",
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],  
    // "react/react-in-jsx-scope": "off"
  },
  
};
