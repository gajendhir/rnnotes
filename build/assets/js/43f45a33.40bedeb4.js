"use strict";(self.webpackChunkrnnotes=self.webpackChunkrnnotes||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Node Package Manager",o={unversionedId:"npm/the-npm",id:"npm/the-npm",title:"Node Package Manager",description:"npm = Node Package Manager",source:"@site/docs/npm/the-npm.md",sourceDirName:"npm",slug:"/npm/the-npm",permalink:"/docs/npm/the-npm",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Package Manager",permalink:"/docs/category/package-manager"},next:{title:"npm Commands",permalink:"/docs/npm/npm-cmd"}},p={},s=[{value:"Software Registry",id:"software-registry",level:2},{value:"Command-Line Client",id:"command-line-client",level:2},{value:"Package Manager",id:"package-manager",level:2},{value:"Version of a package",id:"version-of-a-package",level:3},{value:"Caret (<code>^</code>) Dependencies",id:"caret--dependencies",level:3},{value:"Tilde (<code>~</code>) Dependencies",id:"tilde--dependencies",level:3},{value:"Version Identifiers",id:"version-identifiers",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-package-manager"},"Node Package Manager"),(0,r.kt)("p",null,"npm = Node Package Manager"),(0,r.kt)("h2",{id:"software-registry"},"Software Registry"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://npmjs.com"},"npmjs.org or npmjs.com"))," is the world's largest Software Registry used widely by open source software developers to share software. It has more than 800,000 packages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"npm")," is free to use. Public software pacakages can be downloaded and installed from the registry without any registration or login."),(0,r.kt)("h2",{id:"command-line-client"},"Command-Line Client"),(0,r.kt)("p",null,"The npm command line client can be used to download, install and manage the software packages..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install <package-name>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the npm Registry"),(0,r.kt)("li",{parentName:"ul"},"that are downloaded and stored on your computer"),(0,r.kt)("li",{parentName:"ul"},"From github")),(0,r.kt)("p",null,"The npm command line client is installed alongwith ",(0,r.kt)("a",{parentName:"p",href:"../basics/the-env#node"},"Node.js"),"."),(0,r.kt)("p",null,"You need a package manager for managing the packages that are included into your react-native project."),(0,r.kt)("h2",{id:"package-manager"},"Package Manager"),(0,r.kt)("p",null,"The npm system uses ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file that holds the information about your project.\nAlong with all the information about your project, this is files where ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," stores the names and versions of the packages being used in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="structure of a typical package.json"',title:'"structure',of:!0,a:!0,typical:!0,'package.json"':!0},'{\n    "name": "my-proj",\n    ...\n    "scripts" : {\n        ...\n    }\n    ...\n    "dependencies" : {\n        ...\n        "react" : "17.0.2",\n        "react-native" : "0.68.2",\n        ...\n    },\n    "devDependencies" : {\n        ...\n        "@babel/core": "^7.12.9",\n        "@babel/runtime": "^7.12.5",\n        "@react-native-community/eslint-config": "^2.0.0",\n        ...\n        "babel-jest": "^26.6.3",\n        "eslint": "^7.32.0",\n        "jest": "^26.6.3",\n        ...\n        "metro-react-native-babel-preset": "^0.70.3",\n        "react-test-renderer": "17.0.2",\n        ...\n    },\n    ...\n    "engines" : {\n        ...\n    }\n    ...\n}\n')),(0,r.kt)("p",null,"The names listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," are the packages used in the project. These pacakages are installed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in the project path."),(0,r.kt)("h3",{id:"version-of-a-package"},"Version of a package"),(0,r.kt)("p",null,"npm packages are versioned using the ",(0,r.kt)("a",{parentName:"p",href:"http://semver.org"},"Semantic Versioning spec"),"."),(0,r.kt)("p",null,"Given a version number ",(0,r.kt)("em",{parentName:"p"},"MAJOR.MINOR.PATCH"),", increment the:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"MAJOR")),(0,r.kt)("td",{parentName:"tr",align:null},"version when you make incompatible API changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"MINOR")),(0,r.kt)("td",{parentName:"tr",align:null},"version when you add functionality in a backwards compatible manner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"PATCH")),(0,r.kt)("td",{parentName:"tr",align:null},"version when you make backwards compatible bug fixes.")))),(0,r.kt)("p",null,"Additional labels for pre-release and build metadata are available as extensions to the ",(0,r.kt)("em",{parentName:"p"},"MAJOR.MINOR.PATCH")," format."),(0,r.kt)("h3",{id:"caret--dependencies"},"Caret (",(0,r.kt)("inlineCode",{parentName:"h3"},"^"),") Dependencies"),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," before the version number in the (dev)dependencies section of the ",(0,r.kt)("em",{parentName:"p"},"package.json")," above. Here updates of all future MINOR / PATCH updates will be used, without incrementing the MAJOR version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "eslint": "^7.32.0",\n')),(0,r.kt)("p",null,"Here npm update will install the highest available version of eslint with MAJOR = 7 and MINOR >= 32``` and any PATCH."),(0,r.kt)("h3",{id:"tilde--dependencies"},"Tilde (",(0,r.kt)("inlineCode",{parentName:"h3"},"~"),") Dependencies"),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," before the version number in the (dev)dependencies section of the ",(0,r.kt)("em",{parentName:"p"},"package.json")," above. Here updates of only all future PATCH updates will be used, without incrementing the MAJOR.MINOR version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "package": "~3.1.0",\n')),(0,r.kt)("p",null,"Here npm update will install the highest available version of eslint with MAJOR = 3 and MINOR = 1 and PATCH >= 0."),(0,r.kt)("h3",{id:"version-identifiers"},"Version Identifiers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"value"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"~version"),(0,r.kt)("td",{parentName:"tr",align:null},"Approximately equivalent to version, i.e., only accept new patch versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"^version"),(0,r.kt)("td",{parentName:"tr",align:null},"Compatible with version, i.e., accept new minor and patch versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Must match version exactly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">version"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be greater than version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">=version"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be greater than or equal to version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<version"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be less than version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<=version"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be less than or equal to version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"The latest release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Any version")))))}m.isMDXComponent=!0}}]);