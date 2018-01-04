'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

var _renderFullPage = require('../renderFullPage');

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _getPokemon = require('../../services/getPokemon');

var _getPokemon2 = _interopRequireDefault(_getPokemon);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockData = {
    data: {
        pokemon: [{ pokemon: { name: 'testing' } }]
    }
};

jest.mock('../../services/getPokemon');

_getPokemon2.default.withAbility.mockReturnValueOnce(Promise.resolve(mockData)).mockReturnValueOnce(Promise.reject('error'));

jest.mock('../renderFullPage', function () {
    return jest.fn(function () {
        return 'renderFullPage';
    });
});

jest.mock('react-dom/server', function () {
    return {
        renderToString: jest.fn(function () {
            return 'html';
        })
    };
});

var mockSend = jest.fn(function (renderFullPageFn) {
    return renderFullPageFn;
});

var mockRes = {
    status: jest.fn(function () {
        return mockRes;
    }),
    send: mockSend
};

afterEach(function () {
    jest.clearAllMocks();
});

describe('router', function () {
    it('renders full page with url matches', function () {
        var mockReq = {
            url: _routes2.default[1]
        };
        var expectedPokemonProp = {
            list: [{
                pokemon: {
                    name: 'testing'
                }
            }]
        };
        return (0, _router2.default)(mockReq, mockRes).then(function (resp) {
            expect(_getPokemon2.default.withAbility).toHaveBeenCalled();
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.send).toHaveBeenCalledWith('renderFullPage');
            expect(_renderFullPage2.default).toHaveBeenCalledWith('html', expectedPokemonProp);
        });
    });

    it('renders error when getPokemon withAbility throws error', function () {
        var mockReq = {
            url: _routes2.default[1]
        };
        var expectedPokemonProp = {
            list: [{
                pokemon: {
                    name: 'testing'
                }
            }]
        };
        return (0, _router2.default)(mockReq, mockRes).then(function (err) {
            expect(_getPokemon2.default.withAbility).toHaveBeenCalled();
            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.send).toHaveBeenCalledWith('error: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!');
            expect(_renderFullPage2.default).not.toHaveBeenCalledWith();
        });
    });

    it('renders error when url does not match', function () {
        var mockReq = {
            url: '/notValid'
        };

        (0, _router2.default)(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith('page not found');
        expect(mockRes.status).toHaveBeenCalledWith(404);
        expect(_renderFullPage2.default).not.toHaveBeenCalled();
        expect(_getPokemon2.default.withAbility).not.toHaveBeenCalled();
    });
});