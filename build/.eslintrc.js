const path = require('path')

module.exports = {
  ...require('../.eslintrc.js'),
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    sourceType: 'module'
  }
}
