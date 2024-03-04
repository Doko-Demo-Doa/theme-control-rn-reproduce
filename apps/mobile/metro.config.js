const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const rootPaths = [path.resolve(__dirname), path.resolve(__dirname, "../..")];

const nodeModulesPaths = rootPaths.map((rootPath) =>
  path.resolve(rootPath, "node_modules")
);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = () => {
  const defaultConfig = getDefaultConfig(__dirname);
  const {
    resolver: { sourceExts, assetExts },
  } = defaultConfig;
  return mergeConfig(defaultConfig, {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    watchFolders: rootPaths,
    resolver: {
      nodeModulesPaths: nodeModulesPaths,
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  });
};
module.exports = config;
