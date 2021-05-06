# Create React App Example with Cypress Compoennt Testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Cypress CT

### Install dependencies

```bash
yarn add -D cypress @cypress/react @cypress/webpack-dev-server
```

### Create the configuration files

To setup any Cypress runner, the standard way is to create a `cypress.json` file at the root of your project. Checkout [the docs](https://docs.cypress.io/guides/references/configuration) to know the extend of your options.

Here is the `cypress.json` file at work in this project:

```js
// cypress.json
{
  // Set this porperty to false to avoid cypress creating
  // example `fixture` and `support` folders for fixtures and support files
  // Remove the 2 lines if you are
  "fixturesFolder": false,
  // Tell Cypress how to recognize spec files
  "testFiles": "**/*.test.jsx",
  // All the component test files are
  // located in this directory and its sub-directory
  "componentFolder": "components"
}
```

### Setup Cypress plugins

For this step of the install process, create a `cypress/plugin/index.js` file.
This file will let Cypress know how to start the testing server with your Nuxt configuration.

```js
/// <reference types="cypress" />
const injectCraDevServer = require("@cypress/react/plugins/react-scripts");

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  injectCraDevServer(on, config);
  return config;
};
```

> NOTE: both the `on` handler function and the PluginConfig return something. Don't forget those returns.

### Add testing library

Install the library in your devDependencies

```bash
yarn add -D @testing-library/cypress
```

Then install it in cypress. Add this line to your `cypress/support/index.js` file:

```js
import "@testing-library/cypress/add-commands";
```

> NOTE: we choose to have this line in the `command.js` file to have a clearer idea of where things are. This file is imported in the `support/index.js`.

### Add coverage

Install necessary dependencies

```bash
yarn add -D @cypress/code-coverage @cypress/instrument-cra
```

Add the coverage task in the plugins by adding the two lines below

```js
const installCoverageTask = require("@cypress/code-coverage/task"); // one

module.exports = (on, config) => {
  installCoverageTask(on, config); // two
};
```

## Available Scripts

In the project directory, you can run:

### `yarn cy`

Opens an interactive cypress test runner with a list of the tests you can run and watch

### `yarn cy:run`

Runs all the component tests disovered and fails the command if a test fails (for CI)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
