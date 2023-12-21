const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'index.min.js',
    library: '@subhanprime2/ui-library',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules', './dist'],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@subhanprime2/ui-library': path.resolve(__dirname, 'node_modules/@subhanprime2/ui-library/dist'),
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
