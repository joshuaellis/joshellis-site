const fs = require('fs');
const path = require('path');
const componentGenerator = require('./components/index.js');
const pageGenerator = require('./pages/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../src/pages/${comp}`),
        fs.F_OK,
      );
      return `pages/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
