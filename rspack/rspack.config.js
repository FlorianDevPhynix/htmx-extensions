const path = require("node:path");
const { defineConfig } = require("@rspack/cli");

const config = defineConfig({
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    tsConfig: {
      configFile: path.resolve(__dirname, "./tsconfig.json"),
      references: "auto",
    },
  },
  module: {
    parser: {
      javascript: {
        dynamicImportMode: "eager",
      },
    },
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "builtin:lightningcss-loader",
            /** @type {import('@rspack/core').LightningcssLoaderOptions} */
            options: {
              targets: "ie 10",
            },
          },
          // ... other loaders
        ],
      },
    ],
  },
  experiments: {
    css: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
});
module.exports = config;
