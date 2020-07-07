const path = require('path');

module.exports = {
  devtool: 'eval-souce-map',
  entry: './src/index.tsx', //最初に検索するエントリーファイル
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js', //出力ファイル名
    path: path.resolve(__dirname, 'public'),
  },
};
