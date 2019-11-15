/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
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
      name: 'wantStory',
      default: false,
      message: 'Do you want a storybook story for this component?',
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: './components/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.scss',
        templateFile: './components/styles.scss.hbs',
        abortOnFail: true,
      },
    ];

    // If want storybook component added
    if (data.wantStory) {
      actions.push({
        type: 'add',
        path: '../../stories/{{properCase name}}.stories.js',
        templateFile: './components/stories.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
