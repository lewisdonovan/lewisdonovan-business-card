const { render } = require('prettyjson')
const data = require('./lib/data')

const renderOpts = {
  dashColor: 'purple',
  keysColor: 'green',
  stringColor: 'white'
}

module.exports = () => render(data, renderOpts)