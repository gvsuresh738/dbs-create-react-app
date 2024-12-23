const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer")(),
                                    require("tailwindcss")(), // Add TailwindCSS if needed
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // Add .tsx, .ts
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./public/index.html`,
        }),
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    stats: {
        preset: 'errors-warnings',
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
};
