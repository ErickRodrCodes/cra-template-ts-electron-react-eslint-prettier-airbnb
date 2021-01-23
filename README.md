# cra-template-terrepa

An All-in-one template to create Electron applications for Create React App with TypeScript and SASS/SCSS files. It includes also Prettier and ESLint with configurations recommended by AirBnB

# Requirements
- Node.js 12.16.3 or greater
- npm 6.14.4 or greater
- yarn 1.22.10 or greater

## Installation
Use create-react-app and run the provided template:
```
$ npx create-react-app my_new_app --template cra-template-terrepa
```

### After Install
You might need to update your list of devDependencies since CRA custom Templates does not have support for it

Open your `package.json` and add/update this section just below "dependencies":
```
"devDependencies": {
    "@electron-forge/cli": "^6.0.0-beta.54",
    "@electron-forge/maker-deb": "^6.0.0-beta.54",
    "@electron-forge/maker-rpm": "^6.0.0-beta.54",
    "@electron-forge/maker-squirrel": "^6.0.0-beta.54",
    "@electron-forge/maker-zip": "^6.0.0-beta.54",
    "@types/electron-devtools-installer": "^2.2.0",
    "@types/electron-is-dev": "^1.1.1",
    "concurrently": "^5.3.0",
    "electron": "^11.2.1",
    "electron-devtools-installer": "^3.1.1",
    "electron-is-dev": "^1.2.0",
    "recoil": "^0.1.2",
    "wait-on": "^5.2.1"
  }
```
save the document and run `yarn` in the terminal.

## Developing with Electron
To start developing use `yarn dev` so it will execute the development server from create-react-app. after it is ready, electron-forge will load the application on the browser.