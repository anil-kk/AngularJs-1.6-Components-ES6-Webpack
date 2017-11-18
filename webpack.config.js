const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry :'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: 'body'
        }),
      ],

    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude:/(node_modules|bower_components)/,
                loader:['ng-annotate-loader','babel-loader']
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.html$/,
                loader:'raw-loader'
            }

        ]
    }
};