// path is used to avoid error in windows paths, for example, where it's used \ instead of /
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/, //regular expression to take .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, 
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i, 
                use: {
                    loader: 'file-loader'
                }
                
            }
        ]
    }
};