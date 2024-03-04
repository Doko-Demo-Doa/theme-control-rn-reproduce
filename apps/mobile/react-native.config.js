/** @type import("@react-native-community/cli-types").Config */
module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
      unstable_reactLegacyComponentNames: [
        "react-native-fast-image",
        "CellContainer",
        "AutoLayoutView",
      ],
    },
    android: {
      unstable_reactLegacyComponentNames: [
        "react-native-fast-image",
        "CellContainer",
        "AutoLayoutView",
      ],
    },
  },
  assets: ["./src/assets/fonts/"],
};
