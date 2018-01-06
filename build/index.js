'use strict';

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _BrowserRouter = require('react-router-dom/BrowserRouter');

var _BrowserRouter2 = _interopRequireDefault(_BrowserRouter);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./components/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createMemoryHistory2.default)();

// Build the middleware for intercepting and dispatching navigation actions
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


var store = (0, _redux.createStore)(_reducers2.default, window.__INITIAL_STATE__, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _BrowserRouter2.default,
        null,
        _react2.default.createElement(_Main2.default, null)
    )
), document.getElementById('root'));