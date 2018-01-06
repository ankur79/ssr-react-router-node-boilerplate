'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Main;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _navHeader = require('./navHeader');

var _navHeader2 = _interopRequireDefault(_navHeader);

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main(props) {
    var userInfo = props.userInfo;

    console.log(userInfo);
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_navHeader2.default, null),
        _react2.default.createElement(_reactRouter.Route, { path: '/u/', exact: true, component: _Welcome2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/u/list', exact: true, component: _Welcome2.default })
    );
};