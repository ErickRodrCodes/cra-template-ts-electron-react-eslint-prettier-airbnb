# cra-template-terrepa

An All-in-one template to create Electron applications for Create React App with TypeScript and SASS/SCSS files. It includes also Prettier and ESLint with configurations recommended by AirBnB,  and support for Recoil State Management Library.

# Requirements
- Node.js 12.16.3 or greater
- npm 6.14.4 or greater
- yarn 1.22.10 or greater

## Installation
Use create-react-app and run the provided template:
```
$ npx create-react-app my_new_app --template cra-template-terrepa
```
## Developing with Electron
To start developing use `yarn dev` so it will execute the development server from create-react-app. after it is ready, electron-forge will load the application on the browser.