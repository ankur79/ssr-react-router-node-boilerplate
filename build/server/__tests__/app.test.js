'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('cors', function () {
    return jest.fn(function () {
        return function (req, res, next) {
            return next();
        };
    });
});

jest.mock('../router', function () {
    return jest.fn(function (req, res, next) {
        return res.send();
    });
});

describe('app', function () {
    it('uses cors', function () {
        return (0, _supertest2.default)(_app2.default).get('/').then(function (resp) {
            expect(_cors2.default).toHaveBeenCalled();
            expect(_router2.default).toHaveBeenCalled();
        });
    });
});