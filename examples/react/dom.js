var jsdom = require('jsdom')
var document = jsdom.jsdom('<!doctype html><html><body></body></html>')
var window = document.defaultView
global.document = document
global.window = window
global.navigator = window.navigator
