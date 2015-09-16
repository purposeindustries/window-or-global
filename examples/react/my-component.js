var React = require('react')
var root = require('../../lib')

var MyComponent = React.createClass({

  getInitialState: function () {
    return {
      scrolled: false
    }
  },

  componentDidMount: function () {
    root.addEventListener('scroll', this.onScroll)
  },

  componentWillUnmount: function () {
    root.removeEventListener('scroll', this.onScroll)
  },

  onScroll: function () {
    if (!this.state.scrolled) {
      this.setState({
        scrolled: true
      })
    }
    if (typeof this.props.onScroll === 'function') {
      this.props.onScroll()
    }
  },

  render: function () {
    return React.createElement('div', null, 'Hello World!')
  }
})

module.exports = MyComponent
