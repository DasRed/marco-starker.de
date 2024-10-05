import CopyPlugin from 'copy-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import miniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode:         "development",
    entry:        "./src/assets/js/app.js",
    output:       {
        filename: "assets/js/app.js",
        path:     path.resolve(__dirname, "dist"),
    },
    devServer:    {
        static:     path.resolve(__dirname, "dist"),
        port:       8080,
        hot:        true,
        watchFiles: ["src/**/*.html"],
    },
    plugins:      [
        new HtmlWebpackPlugin({template: "./src/index.html", filename: "./index.html", minify: false}),
        new miniCssExtractPlugin({filename: "assets/css/index.css"}),
        new CopyPlugin({patterns: [{from: "src/assets/images", to: "assets/images"}]}),
    ],
    module:       {
        rules: [
            {
                test: /\.(scss)$/,
                use:  [
                    {
                        // Extracts CSS for each JS file that includes CSS
                        loader: miniCssExtractPlugin.loader,
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: "css-loader",
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader:  "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
};
