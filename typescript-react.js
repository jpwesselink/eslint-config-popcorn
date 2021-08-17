module.exports = {
    extends: ['./javascript.js'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.json',
                ecmaVersion: 2020,
            },
            env: {
                browser: true,
                es6: true,
            },
            plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
            extends: [
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
                'plugin:jsx-a11y/recommended',
                'prettier/react',
            ],
            settings: {
                'import/resolver': {
                    typescript: {
                        extensions: ['.tsx'],
                    },
                },
                'import/extensions': ['.tsx'],
            },
            rules: {
                ...require('./rules/react'),
                ...require('./rules/typescript'),
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
};
