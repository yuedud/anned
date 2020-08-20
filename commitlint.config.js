module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ["feat", "fix", 'upd',"readme", "init"]],
    }
};
