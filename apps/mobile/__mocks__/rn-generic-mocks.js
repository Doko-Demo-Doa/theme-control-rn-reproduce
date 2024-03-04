import "react-native";

export const MockNativeEventEmitter = () => {
  return () => {
    const EventEmitter = require("EventEmitter");
    const RCTDeviceEventEmitter = require("RCTDeviceEventEmitter");

    /**
     * Mock the NativeEventEmitter as a normal JS EventEmitter.
     */
    class NativeEventEmitter extends EventEmitter {
      constructor() {
        super(RCTDeviceEventEmitter.sharedSubscriber);
      }
    }

    return NativeEventEmitter;
  };
};

export const MockRNFirebase = () => {
  return () => ({
    apps: [
      { name: "[DEFAULT]" },
      { name: "notifications" },
      { name: "messaging" },
    ],
  });
};

export const MockRNFirebaseAnalytics = () => {
  return () => ({
    setUserId: jest.fn(),
  });
};

export const MockRNFirebaseMessaging = () => {
  return () => ({
    jsInitialised: jest.fn(() => Promise.resolve()),
    getToken: jest.fn(() => Promise.resolve("FIREBASE_TOKEN")),
  });
};

export const MockRNFirebaseNotifications = () => {
  return () => ({
    jsInitialised: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  });
};

export const MockRNShare = () => {
  return () => ({});
};

export const MockOurLocation = () => {
  return () => ({
    getLocation: jest
      .fn()
      .mockResolvedValue({ coords: { latitude: 55, longitude: 37 } }),
    requestAuthorization: jest.fn(() => Promise.resolve()),
  });
};

export const MockOurNavigator = () => {
  return () => ({
    present: jest.fn(() => Promise.resolve()),
    dismiss: jest.fn(() => Promise.resolve()),
    push: jest.fn(() => Promise.resolve()),
    pop: jest.fn(() => Promise.resolve()),
  });
};

export const MockRNFSManager = () => {
  return () => ({
    RNFSMainBundlePath: "main-bundle",
    RNFSCachesDirectoryPath: "caches",
    RNFSDocumentDirectoryPath: "documents",
    RNFSExternalDirectoryPath: "external",
    RNFSExternalStorageDirectoryPath: "external-storage",
    RNFSTemporaryDirectoryPath: "tmp",
    RNFSLibraryDirectoryPath: "library",
    RNFSFileTypeRegular: "file-type-regular",
    RNFSFileTypeDirectory: "file-type-directory",
  });
};

export const MockPlatform = () => {
  return () => {
    const Platform = require.requireActual("Platform");
    Platform.OS = "android";
    return Platform;
  };
};

export const MockNetInfo = () => {
  return () => {
    return {
      isConnected: {
        fetch: () => {
          return new Promise((accept) => {
            accept(true);
          });
        },
      },
    };
  };
};

export const MockLinking = () => {
  return () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(() => Promise.resolve()),
    canOpenURL: jest.fn(() => Promise.resolve()),
    getInitialURL: jest.fn(() => Promise.resolve()),
  });
};

export const MockScrollView = () => {
  return () => jest.genMockFromModule("ScrollView");
};

export const MockYellowBox = () => {
  return () => jest.genMockFromModule("YellowBox");
};

export const MockNativeModules = () => {
  const modules = {
    NetInfo: MockNetInfo,
    Linking: MockLinking,
    RNShare: MockRNShare,
    Platform: MockPlatform,
    YellowBox: MockYellowBox,
    ScrollView: MockScrollView,
    RNFirebase: MockRNFirebase,
    RNFSManager: MockRNFSManager,
    OurLocation: MockOurLocation,
    OurNavigator: MockOurNavigator,
    RNFirebaseAnalytics: MockRNFirebaseAnalytics,
    RNFirebaseMessaging: MockRNFirebaseMessaging,
    RNFirebaseNotifications: MockRNFirebaseNotifications,
  };

  jest.doMock("Platform", MockPlatform(), { virtual: true });
  jest.doMock("NativeEventEmitter", MockNativeEventEmitter(), {
    virtual: true,
  });

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.keys(modules).forEach((name) => {
    mockReactNativeModule(name, modules[name]());
  });
};

function mockReactNativeModule(name, shape) {
  jest.doMock(name, () => shape(), { virtual: true });
  require("react-native").NativeModules[name] = shape();
}

export default MockNativeModules;
