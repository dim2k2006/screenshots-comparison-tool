const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        library: 'screenshots',
        libraryTarget: 'commonjs2',
        libraryExport: 'default'
    },

    watch: NODE_ENV === 'development',

    mode: NODE_ENV === 'development' ? 'development' : 'production',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: `${__dirname}/src`,
                loader: 'babel-loader',
                sideEffects: false
            }
        ]
    },

    externals: [
        'tracer',
        'colors',
        'path',
        'pageres'
    ]
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                beautify: false,
                comments: false,
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    );
}
