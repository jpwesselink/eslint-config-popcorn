module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 2020 },
    extends: [
        './index.js',
        'airbnb/base',
        'eslint:recommended',
        'plugin:import/recommended',
        'prettier',
    ],
    plugins: ['import', 'prettier', 'unused-imports'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.mjs'],
            },
        },
    },
    rules: {
        ...require('./rules/javascript'),
        ...require('./rules/prettier'),
        ...require('./rules/unused-imports'),
        ...require('./rules/import'),
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                mjs: 'never',
                ts: 'never',
                tsx: 'never',
                js: 'never',
            },
        ],
    },
    overrides: [
        {
            files: ['*.test.js'],
            env: {
                jest: true,
            },
        },
    ],
};
