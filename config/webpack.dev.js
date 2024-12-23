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
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader", // for styles
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: "asset/resource",
                // ...
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
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
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
