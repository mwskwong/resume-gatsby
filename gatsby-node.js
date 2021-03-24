const LoadablePlugin = require("@loadable/webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
    module: {
      rules: [
        {
          test: /react-spring/,
          sideEffects: true
        }
      ]
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: "@loadable/babel-plugin" });
};