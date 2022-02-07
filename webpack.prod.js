const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()]
  },
  output: {
    filename: 'main.[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
          minimize: false
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'assets/' }]
    })
  ]
}
