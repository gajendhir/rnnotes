---
sidebar_position: 4
---

# Local Packages

These packages available locally in the project where you are working and are listed in the `dependencies` objects of `package.json`. These local packages are installed in `node_modules` folder of the project.

If you have two projects using the same package, then you are needed to install it in each of the projects separately.

## Regularly used packages

Below is a list of packages that I use regularly in my projects.

| package | brief description |
|---|---|
| [react-native-fs](https:/npmjs.com/package/react-native-fs) | to work with file system |
| [date time picker](https://www.npmjs.com/package/@react-native-community/datetimepicker) | to allow user to select date and / or time. |
| [sqlite storage](https://www.npmjs.com/package/react-native-sqlite-storage) | to manage sqlite databases |
| [vector icons](https://www.npmjs.com/package/react-native-vector-icons) | a set of icons that are used to enrich the UI/UX |

## Package for Thermal Printers

I forked [react-native-bluetooth-escpos-printer](https://github.com/januslo/react-native-bluetooth-escpos-printer) to [https://github.com/gajendhir/react-native-bluetooth-printer](https://github.com/gajendhir/react-native-bluetooth-printer). I have just updated the package to compile with Gradle 7.2 and corrected typo - unpaire to unpair.

To install from this fork...

```bash
npm install https://github.com/gajendhir/react-native-bluetooth-printer
```

## Screen Navigation

