const LoadablePlugin = require("@loadable/webpack-plugin");

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [
        new LoadablePlugin({
          filename: stage === "develop"
            ? "public/loadable-stats.json"
            : "loadable-stats.json",
          writeToDisk: true
        })
      ]
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: "@loadable/babel-plugin" });
};