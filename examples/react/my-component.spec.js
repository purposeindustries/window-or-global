require('./dom')
var test = require('ava')
var React = require('react/addons')
var TestUtils = React.addons.TestUtils
var proxyquire = require('proxyquire')
var EventEmitter = require('component-emitter')

test('MyComponent', function (t) {
  t.plan(2)

  var root = new EventEmitter()
  var MyComponent = proxyquire('./my-component', {
    '../../lib': root
  })
  var factory = React.createFactory(MyComponent)
  var myComponent = TestUtils.renderIntoDocument(factory())

  t.is(myComponent.state.scrolled, false)

  root.emit('scroll')

  t.is(myComponent.state.scrolled, true)
})
