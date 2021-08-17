module.exports = {
    extends: ['./typescript-react.js'],
    overrides: [
        {
            files: ['./*.js'],
            rules: {
                'global-require': 'off',
            },
        },
    ],
};
