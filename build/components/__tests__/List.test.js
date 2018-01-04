'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _List = require('../List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockPokemon = [{
    pokemon: {
        name: 'friendly'
    }
}];

var mockLocation = {
    match: {
        params: {
            ability: 'swagger'
        }
    }
};

describe('List', function () {
    it('should render correctly when given location', function () {
        var mockPokemon = [{
            pokemon: {
                name: 'friendly'
            }
        }];
        var mockLocation = {
            match: {
                params: {
                    ability: 'swagger'
                }
            }
        };
        var component = (0, _enzyme.shallow)(_react2.default.createElement(_List2.default, { pokemon: mockPokemon, location: mockLocation }));
        expect(component).toMatchSnapshot();
    });

    it('should render correctly when not given location', function () {
        var mockPokemon = [{
            pokemon: {
                name: 'friendly'
            }
        }];
        var mockLocation = {
            match: {
                params: {
                    ability: 'swagger'
                }
            }
        };
        var component = (0, _enzyme.shallow)(_react2.default.createElement(_List2.default, { pokemon: mockPokemon, location: mockLocation }));
        expect(component).toMatchSnapshot();
    });
});