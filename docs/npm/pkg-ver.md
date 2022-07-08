---
sidebar_position: 2
---

# Version of a package

Any body who has done software development work knows the significance of **version**. Due the continuously evovling nature of software, maintaining the version of each release is **critical** to keep track of the feature or any changes thereof.

npm packages are versioned using the [Semantic Versioning spec](http://semver.org).

| Version | Description |
|---|---|
|    MAJOR | version when you make incompatible API changes |
|    MINOR | version when you add functionality in a backwards compatible manner |
|    PATCH | version when you make backwards compatible bug fixes. |

Additional labels for pre-release and build metadata are available as extensions to the *MAJOR.MINOR.PATCH* format.

```json
    "react-native" : "0.68.2",
```

Given above version of the `react-native` used in the project is

|MAJOR|MINOR|PATCH|
|:---:|:---:|:---:|
|0|68|2|

## Version of Dependencies

The list of dependencies specified in the `package.json` always accompanies with the version range that will be supported in the project.

### Caret (`^`) Ranges

Take a look at the `^` before the version number in the (dev)dependencies section of the _package.json_ above. Here updates of all future MINOR / PATCH updates will be used, without incrementing the MAJOR version.

```json
    "eslint": "^7.32.0",
```

Here `npm update` will install the highest available **minor** of `eslint` with `MAJOR = 7` and `MINOR >= 32` and any PATCH. This will *not accept* package whose `MAJOR > 7`.

### Tilde (`~`) Ranges

Take a look at the `~` before the version number in the (dev)dependencies section of the _package.json_ above. Here updates of only all future PATCH updates will be used, without incrementing the MAJOR.MINOR version.

```json
    "package": "~3.1.0",
```

Here `npm update` will install the highest available **patch** of the package with `MAJOR = 3` and `MINOR = 1` and `PATCH >= 0`.

### Version Ranges

|value | description |
|---|---|
| `version` | Must match version exactly |
| `>version` | Must be greater than version |
| `>=version` | Must be greater than or equal to version |
| `<version` | Must be less than version	 |
| `<=version` | Must be less than or equal to version |
|` ~version` | Approximately equivalent to version, <br />i.e., only accept new patch versions |
| `^version` | Compatible with version, <br />i.e., accept new minor and patch versions |
| `latest` | The latest release |
| `*` | Any version |
| `version1 - version2` | Range of permitted versions.<br /> Same as `>=version1` `<=version2`|
| `range1 \|\| range2` | Passes if either `range1` or `range2` are satisfied|


These are valid version identifiers

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
  }
}
```

## urls as Version Range

There are cases where you can also use a `url` as the version range.

* `http://` or `https://` will get the package from the net
* `file:` will get the package from my own file-system

```json
{
    "dependencies": {
        "asd": "http://asdf.com/asdf.tar.gz",
        "dyl": "file:../dyl"
    }
}
```

I once need to slightly modify a package `react-native-bluetooth-escpos-printer`. I forked it to `github:gajendhir/react-native-bluetooth-printer` and then specified this as the version range for that package.

```json
{
    "dependencies": {
        "react-native-bluetooth-escpos-printer": "github:gajendhir/react-native-bluetooth-printer",
    }
}
```

