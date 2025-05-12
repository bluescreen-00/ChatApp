import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

/**
 * To jest konfiguracja ESLint dla projektu React.
 * Pozwala na automatyczne sprawdzanie i egzekwowanie dobrych praktyk w kodzie JavaScript/JSX.
 */

export default [
  // Ignoruje folder 'dist' (nie sprawdza plików produkcyjnych)
  { ignores: ['dist'] },
  {
    // Dotyczy wszystkich plików JS i JSX w projekcie
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Ustawia wersję ECMAScript
      globals: globals.browser, // Ustawia globalne zmienne przeglądarkowe (window, document, itd.)
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Pozwala na składnię JSX
        sourceType: 'module', // Pozwala na import/export ES6
      },
    },
    settings: { react: { version: '18.3' } }, // Ustawia wersję Reacta do analizy
    plugins: {
      react, // Plugin do sprawdzania kodu React
      'react-hooks': reactHooks, // Plugin do sprawdzania hooków React
      'react-refresh': reactRefresh, // Plugin do wspierania hot-reload w React
    },
    rules: {
      ...js.configs.recommended.rules, // Zalecane reguły ESLint dla JS
      ...react.configs.recommended.rules, // Zalecane reguły dla React
      ...react.configs['jsx-runtime'].rules, // Reguły dla JSX runtime
      ...reactHooks.configs.recommended.rules, // Zalecane reguły dla hooków
      'react/jsx-no-target-blank': 'off', // Wyłącza ostrzeżenie o target="_blank" bez rel="noopener"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Ostrzega, jeśli eksportujesz coś innego niż komponent
    },
  },
]
