import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint, { plugin } from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import eslintBabelParser from '@babel/eslint-parser';
import eslintBabelPlugin from '@babel/eslint-plugin';
import eslintA11y from 'eslint-plugin-jsx-a11y';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintUnicorn from 'eslint-plugin-unicorn';
import prettier from 'prettier';

export default [
    {
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    { ignores: ['node_modules/**/*'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        languageOptions: {
            globals: globals.browser,
            parser: eslintBabelParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                requireConfigFile: false,
                babelOptions: {
                    babelrc: false,
                    configFile: false,
                    presets: ['@babel/preset-env']
                }
            }
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        plugins: {
            reactPlugin: eslintPluginReact,
            tsplugin: plugin,
            unicorn: eslintUnicorn,
            babel: eslintBabelPlugin,
            a11y: eslintA11y,
            reactHooks: eslintReactHooks,
            prettier: prettier
        },
        rules: {
            'react/prop-types': 0,
            'unicorn/better-regex': 'error'
        }
    }
];
