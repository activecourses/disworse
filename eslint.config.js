import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint, { plugin } from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        extends: ['plugin:prettier/recommended'],
    },
];
