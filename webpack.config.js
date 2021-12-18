const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  const { mode = 'development' } = argv
  const isProduction = mode === 'production'
  // const isDev = mode === 'development'

  return {
    watchOptions: {
      ignored: /node_modules/
    },
    target: isProduction ? ['web', 'es5'] : 'web',
    // entry: './src/ts/main.ts',
    entry: {
      'main': path.resolve(__dirname, './src/ts/main.ts'),
      'style.css': path.resolve(__dirname, './src/scss/style.scss')
    },
    output: {
      path: path.resolve(__dirname, './dist/'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ]
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*']
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src' , 'index.html'),
        filename: 'index.html'
      }),
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]'
      })
    ],
  }
}