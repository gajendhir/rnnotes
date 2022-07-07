---
sidebar_position: 2
---

# npm Commands

:::note

I shall limit this section to the commands I use regularly in the react-native projects. For a full list of commands see [npmjs documentation](https://docs.npmjs.com/cli/v8/commands/npm-install).

:::

## Install Packages

```bash
npm install <package-name>   
```

```<package-name>``` is the package to install, for eg.

```bash
npm install react-native-screens
```

This will install latest version of the package ```react-native-screens```. If you are seeking to install a specific version, the command becomes...

```bash
npm install react-native-screens@6.0.1
```

The name and version of the package that is installed is added to the ```dependencies``` section in the ```package.json```.

You add flags to add the package to a different section...

* ```-P``` or ```--save-prod```. Packages will appear in the ```dependencies```. This is the default unless -D or -O is present.
* ```-D``` or ```--save-dev```. Packages will appear in the ```devDependencies```.
* ```-O``` or ```--save-optional```. Packages will appear in the ```optionalDependencies```.
* ```--no-save```. Packages will not appear in any of the ```dependencies```.

## Install Packages Globally



## Single Package



## All from package.json

