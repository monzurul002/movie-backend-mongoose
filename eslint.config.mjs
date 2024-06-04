import globals from "globals";

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn"
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    ignores: ["**/.env/", "node_modules", "**/dist/"]
  }
);