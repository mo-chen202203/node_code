/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        project: true,
    },
    extends: [require.resolve('@pangshu/code/eslint/node')],
};