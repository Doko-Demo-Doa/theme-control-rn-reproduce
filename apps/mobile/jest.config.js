const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: "react-native",
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src$1",
    "\\.svg": "<rootDir>/__mocks__/svg-mock.js",
  },
  // https://shopify.github.io/react-native-skia/docs/getting-started/installation/#esm-setup
  // Pay attention to package.json test:esm command
  setupFiles: ["@shopify/react-native-skia/jestSetup.mjs"],
  setupFilesAfterEnv: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "<rootDir>/jest.setup.ts",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native.*|@react-native.*|@?react-navigation.*|@shopify/react-native-skia)/)",
  ],
  collectCoverage: true,
  coverageReporters: ["html", "text", "text-summary", "cobertura"],
  testMatch: ["**/*.test.ts?(x)", "**/*.test.js?(x)"],
  modulePathIgnorePatterns: ["./__tests__/App.test.tsx"],
};
