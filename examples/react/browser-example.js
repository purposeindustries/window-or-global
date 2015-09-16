var React = require('react')
var MyComponent = require('./my-component')

React.render(React.createFactory(MyComponent)({
  onScroll: function () {
    console.log('scroll!!!')
  }
}), document.getElementById('mount'))
