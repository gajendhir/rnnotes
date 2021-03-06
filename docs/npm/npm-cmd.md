---
sidebar_position: 5
---

# npm Commands

:::caution

Here are some npm command I use regularly in react-native development. For a full list of commands see [npmjs documentation](https://docs.npmjs.com/cli/v8/commands/npm-install).

:::

## Install Packages

```bash
npm install <package-name>   
```

`<package-name>` is the package to install, for eg.

```bash
npm install react-native-screens
```

This will add the latest version of the package `react-native-screens`. If you are seeking to install a specific version, the command becomes...

```bash
npm install react-native-screens@6.0.1
```

The name and version of the package that is installed is added to the `dependencies` section in the `package.json`.

You add flags to add the package to a different section...

* `-P` or `--save-prod`. Packages will appear in the `dependencies`. This is the default unless -D or -O is present.
* `-D` or `--save-dev`. Packages will appear in the `devDependencies`.
* `-O` or `--save-optional`. Packages will appear in the `optionalDependencies`.
* `--no-save`. Packages will not appear in any of the dependencies.

The default local install, puts the packagers in `./node_modules` of the current package root.

### Install Packages Globally

To install a package globally -g or --global flag is added to the install command

```bash
npm install -g npm-check-updates
npm install --global npm-check-updates
```

:::note

npm is showing this message for some time...

```text
config global `--global`, `--local` are deprecated. Use `--location=global` instead.
```

:::

### All from package.json

If you do not specify any package name for install, the command will install all the packages listed in `package.json`.

```bash
npm install
```

To reinstall all the npm packages in your project, Delete the `node_modules` folder from your project folder and execute `npm install`.

### List of Packages

To get a list of packages installed in your project or installed globally.

```bash
npm list
npm list -g
```

### Uninstall a package

To uninstall a package from your project...

```bash
npm uninstall <package-name>
```

### Upgrade / Update a package

You may use any of these three aliases - `up`, `update` or `upgrade` to upgrade a package version.

```bash
npm upgrade <package-name>
```

or

```bash
npm upgrade <package-name>@latest
```

Adding the flag -g will update the packages installed globally.

```bash
npm upgrade -g <package-name>
```

:::caution

Be careful when you upgrade a package, it is quite possible that its dependencies may not yet be ready. It could lead to some warnings and errors at build time.

I prefer to upgrade one package at a time and that too only when there is no pressing delivery scheduled.

:::

## npx - npm exec

npx is used to run a command from a local or remote npm package. for eg.

```bash title="Start a new react-native project using the default template"
npx react-native init proj
```

or

```bash title="Run the current project for Android"
npx react-native run-android
```

```bash title="Run the current project for iPhone"
npx react-native run-ios
```

## More Commands

There are many more commands that allow you to login, publish and maintain packages on the [npm registry](the-npm#software-registry).

For a complete list see [CLI Commands](https://docs.npmjs.com/cli/v8/commands).
