const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { exec } = require('child_process');
module.exports = {
  mode: 'production',
  // entry: './dist/index.min.js',
  entry: () => new Promise((resolve, reject) => {
    // Perform logic to generate the entry point dynamically
    // Example: Generate index.min.js before resolving the entry point
    generateIndexMinFile(() => {
      resolve('./dist/index.min.js'); // Resolve the entry point
    });
  }),
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
    alias: {
      '@subhanprime2/ui-library': path.resolve(__dirname, 'node_modules/@subhanprime2/ui-library/dist'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};


function generateIndexMinFile(callback) {
  const babelBin = path.resolve('node_modules', '.bin', 'babel');
  const sourcePath = path.resolve(__dirname, 'src'); // Change this path according to your project structure
  const outputPath = path.resolve(__dirname, 'dist');

  exec(
    `${babelBin} ${sourcePath} --out-dir ${outputPath} --presets=@babel/preset-env,@babel/preset-typescript --minified --no-comments`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Babel error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`Babel stderr: ${stderr}`);
        return;
      }
      console.log(`Babel stdout: ${stdout}`);
      callback();
    }
  );
}