module.exports = {
    'import/no-cycle': 'warn',
    'import/no-unresolved': 'error',
    'import/order': [
        'error',
        {
            alphabetize: {
                caseInsensitive: true,
                order: 'asc',
            },
            groups: ['builtin', 'external', 'internal'],
            'newlines-between': 'always',
            pathGroups: [
                {
                    group: 'builtin',
                    pattern: 'react',
                    position: 'before',
                },
                {
                    group: 'builtin',
                    pattern: 'aws*',
                    position: 'before',
                },
                {
                    group: 'builtin',
                    pattern: '@dazn*',
                    position: 'before',
                },
            ],
            pathGroupsExcludedImportTypes: ['react', 'aws*', '@dazn*'],
        },
    ],
};
