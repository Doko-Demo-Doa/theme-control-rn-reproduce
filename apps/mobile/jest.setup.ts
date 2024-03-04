// https://github.com/react-navigation/react-navigation/issues/9727
jest.useFakeTimers();

import "@testing-library/jest-native/extend-expect";
import { NativeModules } from "react-native";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

// UniStyles
NativeModules.Unistyles = {
  install: jest.fn().mockReturnValue(true),
};

// @ts-ignore
global.__UNISTYLES__ = {
  enabledPlugins: [],
  useBreakpoints: jest.fn(),
  useAdaptiveThemes: jest.fn(),
  useTheme: jest.fn(),
  themeName: "default",
};

// react-native-theme-switch-animation
jest.mock("react-native-theme-switch-animation", () => jest.fn());

jest.mock("react-native-bootsplash", () => {
  return {
    hide: jest.fn().mockResolvedValue(undefined),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: { source: 0 },
      brand: { source: 0 },
    }),
  };
});

console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
};
