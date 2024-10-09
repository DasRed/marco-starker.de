import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

/** @type {import('next').NextConfig} */
export default {
    //appDir: true,
    //reactStrictMode: true,
    ///**
    // *
    // * @param {import('next/dist/server/config-shared.js').NextJsWebpackConfig} config
    // * @returns {import('next/dist/server/config-shared.js').NextJsWebpackConfig}
    // */
    //webpack: (config) => {
    //    config.experiments = {...config.experiments, topLevelAwait: true};
    //    return config;
    //},
    //
    //typescript: {
    //    ignoreBuildErrors: true,
    //}

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
