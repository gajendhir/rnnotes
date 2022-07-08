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

The npm command line client is installed alongwith [Node.js](../basics/the-env#node).

You need a package manager for managing the packages that are included into your react-native project.

## Package Manager

The npm system uses ```package.json``` file that holds the information about your project.
Along with all the information about your project, this is files where ```npm``` stores the names and versions of the packages being used in your project.

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

The names listed in the ```dependencies``` and ```devDependencies``` are the packages used in the project. These pacakages are installed in the ```node_modules``` folder in the project path.

### Version of a package

npm packages are versioned using the [Semantic Versioning spec](http://semver.org).

Given a version number *MAJOR.MINOR.PATCH*, increment the:

| Version | Description |
|---|---|
|    *MAJOR* | version when you make incompatible API changes |
|    *MINOR* | version when you add functionality in a backwards compatible manner |
|    *PATCH* | version when you make backwards compatible bug fixes. |

Additional labels for pre-release and build metadata are available as extensions to the *MAJOR.MINOR.PATCH* format.

### Caret (```^```) Dependencies

Take a look at the ```^``` before the version number in the (dev)dependencies section of the _package.json_ above. Here updates of all future MINOR / PATCH updates will be used, without incrementing the MAJOR version.

```json
    "eslint": "^7.32.0",
```

Here npm update will install the highest available version of eslint with MAJOR = 7 and MINOR >= 32``` and any PATCH.

### Tilde (```~```) Dependencies

Take a look at the ```~``` before the version number in the (dev)dependencies section of the _package.json_ above. Here updates of only all future PATCH updates will be used, without incrementing the MAJOR.MINOR version.

```json
    "package": "~3.1.0",
```

Here npm update will install the highest available version of eslint with MAJOR = 3 and MINOR = 1 and PATCH >= 0.

### Version Identifiers

|value | description |
|---|---|
|~version | Approximately equivalent to version, i.e., only accept new patch versions |
| ^version | Compatible with version, i.e., accept new minor and patch versions |
| version | Must match version exactly |
| >version | Must be greater than version |
| >=version |	Must be greater than or equal to version |
| <version | Must be less than version	 |
| <=version | Must be less than or equal to version |
| latest | The latest release |
| * | Any version |
