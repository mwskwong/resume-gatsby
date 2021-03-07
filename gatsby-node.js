exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
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