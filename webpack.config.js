const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkerPlugin = require('worker-plugin');

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            appMountId: 'app',
            filename: 'index.html'
        }),
        new webpack.NormalModuleReplacementPlugin(/MY_MODULE_PATH/, function(resource) {
            if (resource.contextInfo.issuer.endsWith('worker.js')) {
                resource.request = path.resolve(__dirname, 'moduleA.js')
            } else {
                resource.request = path.resolve(__dirname, 'moduleB.js')
            }
        }),
        new WorkerPlugin({
            globalObject: false,
        })
    ]
};

module.exports = config;