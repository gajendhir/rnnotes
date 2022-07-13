---
sidebar_position: 1
---

# Node Package Manager

npm = Node Package Manager

## Software Registry

**[npmjs.org or npmjs.com](https://npmjs.com)** is the world's largest Software Registry used widely by open source software developers to share software. It has more than 800,000 packages.

**npm** is free to use. Public software pacakages can be downloaded and installed from the registry without any registration or login.

## Command-Line Client

The npm command line client can be used to download, install and manage the software packages...

```bash
npm install <package-name>
```

* From the npm Registry
* that are downloaded and stored on your computer
* From github

The npm command line client is installed alongwith [Node.js](../the-env#node).

You need a package manager for managing the packages that are included into your react-native project.

## Package Management

The npm system uses `package.json` file that holds the information about your project.
Along with all the information about your project, this is files where `npm` stores the names and versions of the packages being used in your project.

```json title="structure of a typical package.json"
{
    "name": "my-proj",
    ...
    "scripts" : {
        ...
    }
    ...
    "dependencies" : {
        ...
        "react" : "17.0.2",
        "react-native" : "0.68.2",
        ...
    },
    "devDependencies" : {
        ...
        "@babel/core": "^7.12.9",
        "@babel/runtime": "^7.12.5",
        "@react-native-community/eslint-config": "^2.0.0",
        ...
        "babel-jest": "^26.6.3",
        "eslint": "^7.32.0",
        "jest": "^26.6.3",
        ...
        "metro-react-native-babel-preset": "^0.70.3",
        "react-test-renderer": "17.0.2",
        ...
    },
    ...
    "engines" : {
    ...
    }
    ...
}
```

The names listed in the `dependencies` and `devDependencies` are the packages used in the project. These are the local packages for the project and will be installed in the `node_modules` folder of the project-root.

### Version of a package

```json
    "react-native" : "0.68.2",
```

Given here, the version of `react-native` in the current project is

|MAJOR|MINOR|PATCH|
|:---:|:---:|:---:|
|0|68|2|

You may specify the [range of versions](pkg-ver) that may be installed in the project by `npm` to allow the [`npm update`](npm-cmd#upgrade--update-a-package) to install to the latest version possible.

### Sections of package.json

Visit [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) - for a detailed discussion on the specifics of the file. This information will be more significant if you decide to develop and publish your own package on the [npm software registry](the-npm#software-registry).
