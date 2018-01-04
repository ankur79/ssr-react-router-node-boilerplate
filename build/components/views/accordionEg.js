'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collapse = function Collapse() {
    return _react2.default.createElement(
        _reactBootstrap.PanelGroup,
        null,
        _react2.default.createElement(_reactBootstrap.Panel, { collapsible: true, header: 'CREATE BCP REPORT', eventKey: '1' }),
        _react2.default.createElement(_reactBootstrap.Panel, { collapsible: true, defaultExpanded: true, header: 'VIEW ALL BCP REPORT(S)', eventKey: '2' })
    );
};

exports.default = Collapse;