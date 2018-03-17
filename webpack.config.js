module.exports = {
    entry: "./src/app.ts",
    mode: "development", // or production
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      // Add `.ts` as a resolvable extension.
      extensions: [".ts", ".js"]
    }
}