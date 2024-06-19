import { deepMerge } from '@pangshu/utils';
import { ConfigEnv, UserConfig } from 'vite';
import { Configure } from './types';
import { resolve } from 'node:path';

export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
    const isBuild = params.command === 'build';
    return deepMerge<UserConfig, UserConfig>(
        {
            resolve: {
                alias: {
                    '@': resolve(__dirname, '../src'),
                },
            },
            // ...
        },
        typeof configure === 'function' ? configure(params, isBuild) : {},
        'merge',
    );
};
