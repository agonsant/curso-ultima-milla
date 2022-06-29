const { join } = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ],
    },
    output: {
      filename: 'main.js',
      path: join(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    // devServer: {
    //   contentBase: './dist/src',
    //   port: 4200,
    // }
}