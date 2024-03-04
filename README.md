## Requirements:

- NodeJS 18
- Android Studio with NDK version 25.1.8937393 installed
- XCode with XCode Command Line Tools (on Mac OS, for iOS builds)
- Yarn 3+ (or 4). Should be easily installed with `npm install -g yarn`

## To reproduce the bug:

Follow the instruction [here](https://github.com/vonovak-org/react-native-theme-control/blob/main/docs/install.md#for-rn--071) (modify the file in `node_modules/react-native/Libraries/AppDelegate`)

Note: If you are using NVM / NodeNV / NVS, you can create a `.xcode.env.local` file at `apps/mobile/ios/` with something like this to have your node binary detected:

```
export NODE_BINARY=/Users/<your_username>/.nodenv/versions/20.11.0/bin/node
```

(with `20.11.0` being your actual Node version in the shell)