'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactRouterDom = require('react-router-dom');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockPokemon = {
    list: []
};

describe('App', function () {
    it('should render Home component for route /', function () {
        var component = (0, _enzyme.mount)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: {}, location: '/' },
            _react2.default.createElement(_App2.default, null)
        ));
        expect(component).toMatchSnapshot();
    });

    it('should render List component for route /pokemon/ability/testing', function () {
        var component = (0, _enzyme.mount)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: {}, location: '/pokemon/ability/testing' },
            _react2.default.createElement(_App2.default, { pokemon: mockPokemon })
        ));
        expect(component).toMatchSnapshot();
    });

    it('should render Redirect component for route /pokemon', function () {
        var component = (0, _enzyme.mount)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: {}, location: '/pokemon' },
            _react2.default.createElement(_App2.default, null)
        ));
        expect(component).toMatchSnapshot();
        expect(component.find(_reactRouterDom.Redirect).props().to).toEqual('/pokemon/ability/telepathy');
    });
});