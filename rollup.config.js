const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts").default;
const postcss = require("rollup-plugin-postcss");

const packageJson = require("./package.json");

module.exports = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                extract: true, // Extract CSS to a separate file
                minimize: true, // Minify the CSS
                modules: false, // Enable CSS modules if needed
                // Add other PostCSS plugins or options here
                // For example:
                plugins: [
                    require("autoprefixer"), // Use autoprefixer
                    // Add other PostCSS plugins as needed
                ],
            }),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];