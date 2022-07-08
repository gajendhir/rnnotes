---
sidebar_position: 2
---

# Expo Cli

[Expo CLI](https://expo.dev)

:::warning

All of the services by Expo are not free - there is a price tag.

:::

`expo-cli` is easiest way to get into react-native development. Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

Among its other feature Expo provides a SDK with a rich set of components. Expo also builds the apps ready for *Apple App Store* and *Google Play Store* on the cloud leaving you free to focus on the design and development of the app. All you require is [node](the-env#node) and a phone or emulator.

Execute the npm command to install `expo-cli` on your computer.

```bash
npm install -g expo-cli
```

To start a new react-native project using expo-cli

```bash
expo init AwesomeProject
```

This will create the folder `AwesomeProject` in your current folder, with the project initiated and ready for you. All you need to do is change to that folder and start the development server.

```bash
cd AwesomeProject
npm start
```

instead of `npm start` you could also use

```bash
expo start
```

:::note
In this website, beyond this, the discussions on react-native will be centered around the [`react-native-cli`](rn-cli).
:::

## [Expo Snack](https://snack.expo.dev/)

A good place to start with react-native. No setup - No Installs. Just open the side, code in and execute. Just click [Snack](https://snack.expo.dev/) and get started.

