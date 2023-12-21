const { exec } = require('child_process');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

// Perform build steps specific to your library (e.g., transpiling, bundling)
// This could involve executing TypeScript, Babel, or other build tools

// For example, assuming you're transpiling TypeScript
exec('tsc', (error, stdout, stderr) => {
  if (error) {
    console.error(`Typescript compilation error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Typescript compilation stderr: ${stderr}`);
    return;
  }
  console.log(`Typescript compilation stdout: ${stdout}`);

  // After the build completes, the generated index.min.js file should exist
  // Then, you can run webpack with the updated entry point
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle webpack errors
      console.error('Webpack build error:', err || (stats && stats.toJson().errors));
      return;
    }
    // Handle successful webpack build
    console.log('Webpack build successful');
  });
});
