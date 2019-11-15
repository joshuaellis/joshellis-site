/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantRedux',
      default: false,
      message: 'Do you want to connect this page to redux?',
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../../src/pages/{{properCase name}}.js',
        templateFile: './pages/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/styles/pages/{{properCase name}}.scss',
        templateFile: './pages/styles.scss.hbs',
        abortOnFail: true,
      },
    ];

    // If want storybook component added
    if (data.wantRedux) {
      actions.push({
        type: 'add',
        path: '../../src/store/actions/{{properCase name}}Actions.js',
        templateFile: './pages/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/store/constants/{{properCase name}}Constants.js',
        templateFile: './pages/constants.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/store/reducers/{{properCase name}}Reducer.js',
        templateFile: './pages/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
