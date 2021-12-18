const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/ts/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  devServer: {
    watchFiles: ['src/**/*'],
    host: '0.0.0.0',
    static: "dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src' , 'index.html'),
      filename: 'index.html'
    }),
  ],
}