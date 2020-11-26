const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// extracting all css files into one css file using optimization.splitChunks.cacheGroups.

const config = {
    // the entry property is the top js file which has the first load order and no dependencies
    // the application will search for the entry file to load
    entry: './src/index.js',
    // stash the output file
    output: {
        // current work directory
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        // rules contain different loaders that run on application 
        rules: [
            {
                // test property makes sure that babel loader only works on js file instead of images or CSS or other type of files
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // a rule preset that tell JS file how to turn codes into ES5 codes
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // find css file
                test: /\.css$/i,
                // the order has to be executed from right to left
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // asset type will check the file size and decide whether the file will be treated as inline or resource.
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // set the max limit 20kb
                        maxSize: 20 * 1024
                    }
                }
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },          
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ]
};

module.exports = config;