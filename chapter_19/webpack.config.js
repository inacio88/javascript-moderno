// opções que queremo como o webpack funcione
// é necessário node, isso não vai rodar no navegador
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    mode: 'development',
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     directory: path.join(__dirname, "assets"),
        // publicPath: '/assets/',
        // compress: true,
        // port: 8080,
        // hot: true
    // }
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),

        },
        devMiddleware: {
            index: true,
            mimeTypes: { "text/html": ["phtml"] },
            publicPath: "/assets/",
            serverSideRender: true,
            writeToDisk: true,
          },
        compress: true,
        port: 9000,
    },
};
