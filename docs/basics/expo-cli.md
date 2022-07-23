---
sidebar_position: 3
---

# Expo Cli

[Expo CLI](https://expo.dev)

:::info

All of the services by Expo are not free - Some have a price tag.

:::

`expo-cli` is easiest way to get into react-native development. Expo is a set of tools built around React Native and has many features. At this stage the most relevant feature for us, is that it can get you writing your React Native app within minutes. 

To get started with Expo, you need only the recent version of Node.js, the Expo-Cli and a phone or emulator.

Among its other feature Expo provides a SDK with a rich set of components. Expo also builds the apps ready for *Apple App Store* and *Google Play Store* on the cloud leaving you free to focus on the design and development of the app. 

Execute the npm command to install `expo-cli` on your computer.

```bash title="Install expo-cli"
npm install -g expo-cli
```

To start a new react-native project using expo-cli

```bash title="Start a new Project"
expo init AwesomeProject
```

This will create the folder `AwesomeProject` in your current folder, with the project initiated and ready for you. All you need to do is change to that folder and start the development server.

```bash title="Launch the App"
cd AwesomeProject
npm start
```

instead of `npm start` you could also use

```bash
expo start
```

If you are using vscode, cd to your project's root folder, and

```bash
code .
```

## [Expo Snack](https://snack.expo.dev/)

A good place to start with react-native. No setup - No Installs. Just open the site, code in and execute. Just click [Snack](https://snack.expo.dev/) and get started.

---

:::info
In this website, beyond this, the discussions on react-native will be centered around the [`react-native-cli`](rn-cli).
:::
