const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  },

  // 입력
  entry: {
    app: ["./client"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },

  // 출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
