import nodemon from 'nodemon';

nodemon({
    script: 'node_modules/.bin/nest',
    args: [
        'start',
        '-c',
        'nest-cli.json',
        '-p',
        'tsconfig.build.json',
        '-w',
        '--preserveWatchOutput',
    ],
    watch: ['node_modules/@pangshu/**/dist/**/*'],
    ignore: [],
    ignoreRoot: [],
    ext: 'js',
}).on('quit', () => {
    process.exit();
});