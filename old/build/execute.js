import esbuild from 'esbuild';
import time from 'esbuild-plugin-time';
import fs from 'fs';
import * as sass from 'sass';

export default async function execute() {
    const [resultCss] = await Promise.all([
        sass.compileAsync('./src/scss/styles.scss', {
            sourceMap:           false,
            style:               'compressed',
            silenceDeprecations: ['mixed-decls', 'color-functions'],
        }),
        esbuild.build({
            entryPoints:   ['./src/index.js'],
            bundle:        true,
            minify:        true,
            sourcemap:     false,
            target:        ['esnext'],
            format:        'esm',
            legalComments: 'none',
            outfile:       './public/dist/index.js',
            plugins:       [
                time(),
            ],
        }),
    ]);

    fs.writeFileSync('./public/dist/styles.css', resultCss.css, {encoding: 'utf8'});
}
