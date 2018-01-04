'use strict';

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _renderFullPage = require('../renderFullPage');

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _App = require('../../components/App');

var _App2 = _interopRequireDefault(_App);

var _reducers = require('../../components/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Or wherever you keep your reducers


module.exports = function (app, config, passport) {

  app.get('/', function (req, res) {
    // Create a history of your choosing (we're using a browser history in this case)
    var history = (0, _createMemoryHistory2.default)();

    // Build the middleware for intercepting and dispatching navigation actions
    var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

    var match = _routes2.default.reduce(function (acc, route) {
      return (0, _reactRouterDom.matchPath)(req.url, { path: route, exact: true }) || acc;
    }, null);

    // Add the reducer to your store on the `router` key
    // Also apply our middleware for navigating
    var store = (0, _redux.createStore)((0, _redux.combineReducers)({
      reducers: _reducers2.default,
      router: _reactRouterRedux.routerReducer
    }), (0, _redux.applyMiddleware)(middleware));

    if (!match) {
      res.status(404).send('page not found');
      return;
    }
    var userInfo = null;
    if (req.isAuthenticated()) {
      userInfo = req.user;
    } else {
      //userAuth = false;
    }

    console.log(userInfo);
    var context = {};

    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterRedux.ConnectedRouter,
        { history: history },
        _react2.default.createElement(_App2.default, { userInfo: userInfo })
      )
    ));

    res.status(200).send((0, _renderFullPage2.default)(html));
  });

  app.get('/login', passport.authenticate(config.passport.strategy, {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  //app.post(config.passport.saml.path,
  app.post('/v1/saml', passport.authenticate(config.passport.strategy, {
    failureRedirect: '/',
    failureFlash: true
  }), function (req, res) {
    res.redirect('/');
  });

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get('/profile', function (req, res) {

    if (req.isAuthenticated()) {
      res.render('profile', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/logout', function (req, res) {
    delete req.session;
    req.logout();
    // TODO: invalidate session on IP
    res.redirect('/');
  });
};