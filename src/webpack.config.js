const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // または 'production'
  entry: './src/index.js', // エントリーポイントとなるJavaScriptファイル
  output: {
    filename: 'bundle.js', // 出力されるJavaScriptファイル名
    path: path.resolve(__dirname, 'dist'), // 出力先のディレクトリ
    clean: true, // ビルド前にoutputディレクトリをクリーンアップ
  },
  devtool: 'inline-source-map', // デバッグ用 (productionビルドでは通常削除)
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // テンプレートとなるHTMLファイル
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // CSSを<style>タグとしてDOMに追加
          'css-loader',   // CSSファイルを読み込む
          'sass-loader',  // SassファイルをCSSにコンパイル
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};