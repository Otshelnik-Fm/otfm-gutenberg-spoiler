var path = require('path');
 
module.exports = {
  entry: './blocks/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};