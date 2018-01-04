'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _accordionEg = require('./views/accordionEg.js');

var _accordionEg2 = _interopRequireDefault(_accordionEg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
    var userInfo = props.userInfo;

    console.log(userInfo);
    return _react2.default.createElement(
        'div',
        null,
        'Your SSR React Router Node App initialised with data!',
        _react2.default.createElement(_reactRouter.Route, { path: '/', exact: true, component: _Home2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/list', exact: true, component: _accordionEg2.default })
    );
};