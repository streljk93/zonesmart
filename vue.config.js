const path = require('path')

module.exports = {
    configureWebpack: {
        module: {
           rules: [
               {
                   test: /\.pug$/,
                   loader: 'pug-plain-loader',
               },
           ],
        },
        resolve: {
            extensions: ['.js', '.json', '.sass', '.vue'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    },
};
