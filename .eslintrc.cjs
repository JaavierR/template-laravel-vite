/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        '@antfu',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-prettier',
    ],
    env: {
        'vue/setup-compiler-macros': true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint', 'unused-imports'],
    globals: {
        defineProps: 'readonly',
    },
    rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'vue/no-unused-vars':
            process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
    },
    ignorePatterns: [
        '/app',
        '/bootstrap',
        '/config',
        '/database',
        '/lang',
        '/node_modules',
        '/public',
        '/routes',
        '/storage',
        '/tests',
        '/vendor',
    ],
}
