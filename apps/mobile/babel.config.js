/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["react-native-worklets-core/plugin"],
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".json"],
        alias: {
          "~": "./src",
          types: "./@types",
        },
      },
    ],
    "inline-dotenv",
    "react-native-iconify/plugin",
    "react-native-reanimated/plugin",
  ],
};
