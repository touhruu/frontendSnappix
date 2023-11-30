const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const enableImportsFromExternalPaths = require('./plugins/externalPath')

const packages = [];
packages.push(path.join(__dirname, "../components"));

module.exports = {
  plugins: [{
    plugin: {
      overrideWebpackConfig: ({ webpackConfig }) => {
        enableImportsFromExternalPaths(webpackConfig, [
          // Add the paths here
          path.resolve(__dirname, '../components/public')
        ]);
        return webpackConfig;
      },
    },
  }],
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};