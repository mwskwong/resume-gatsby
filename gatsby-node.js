const LoadablePlugin = require("@loadable/webpack-plugin");
const { unlinkSync } = require("fs");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /react-spring/,
          sideEffects: true
        }
      ]
    },
    plugins: [new LoadablePlugin({ filename: "loadable-stats.json" })]
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: "@loadable/babel-plugin" });
};

exports.onPostBuild = () => {
  unlinkSync("./public/loadable-stats.json");
};