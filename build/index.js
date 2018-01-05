'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_Main2.default, { pokemon: window.__PRELOADED_STATE__ })
), document.getElementById('root'));