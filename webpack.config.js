const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

module.exports = (env, argv) => {
  const { mode = 'development' } = argv
  const isProduction = mode === 'production'
  // const isDev = mode === 'development'

  return {
    devtool: 'source-map',
    watchOptions: {
      ignored: /node_modules/
    },
    target: isProduction ? ['web', 'es5'] : 'web',
    // entry: './src/ts/main.ts',
    entry: {
      'main': path.resolve(__dirname, './src/ts/main.ts'),
      'style.css': path.resolve(__dirname, './src/scss/style.scss'),
    },
    output: {
      path: path.resolve(__dirname, './public/'),
      filename: '[name].js',
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
      ]
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]'
      })
    ],
  }
}