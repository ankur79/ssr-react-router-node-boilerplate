'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    isAuthenticated: false
};

var authReducer = function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                isAuthenticated: true
            };
        case 'AUTH_FAIL':
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
};

exports.default = authReducer;