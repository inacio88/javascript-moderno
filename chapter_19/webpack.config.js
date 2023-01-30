// opções que queremo como o webpack funcione
// é necessário node, isso não vai rodar no navegador
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    }
};
