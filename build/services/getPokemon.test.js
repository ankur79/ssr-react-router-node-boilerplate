'use strict';

var _getPokemon = require('./getPokemon');

var _getPokemon2 = _interopRequireDefault(_getPokemon);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('axios');

_axios2.default.get.mockReturnValue('testing');

var baseUrl = 'http://pokeapi.co/api/v2/ability';

describe('getPokemon', function () {
    it('', function () {
        expect(_getPokemon2.default.withAbility('mind control')).toEqual('testing');
        expect(_axios2.default.get).toHaveBeenCalledWith(baseUrl + '/mind control');
    });
});