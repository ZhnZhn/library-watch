'use strict';

/* eslint-env browser */
/* eslint-disable no-undef */
var _require = require('jsdom'),
    JSDOM = _require.JSDOM;

var jsdom = new JSDOM('<!doctype html><html><body></body></html>');
var window = jsdom.window;


global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

/* eslint-enable no-undef */
//# sourceMappingURL=setupGlobal.test.js.map