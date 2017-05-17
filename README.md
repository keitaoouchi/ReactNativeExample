# About

[![CircleCI](https://circleci.com/gh/keitaoouchi/ReactNativeExample.svg?style=svg)](https://circleci.com/gh/keitaoouchi/ReactNativeExample)

<img src="https://github.com/keitaoouchi/ReactNativeExample/blob/master/screen/sample.ios.gif" width="250px" />

#### Required Environment

```bash
brew install node
brew install watchman
brew install cocoapods
brew install yarn
npm install -g react-native-cli@2.0.1
```

#### Run

```bash
git clone https://github.com/keitaoouchi/ReactNativeExample.git
cd ReactNativeExample
yarn
cd ios && pod install && cd ..
react-native link
# or you could open `ios/SevenDaysOfReactNative.xcworkspace`, then Run App.
react-native run-ios
# or you could open `android` with Android Studio, then Run App.
react-native run-android
```
