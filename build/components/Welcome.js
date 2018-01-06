'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bcpForm = require('../components/bcpForm');

var _bcpForm2 = _interopRequireDefault(_bcpForm);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import style from '../css/accordion.css';
//require('../css/accordion.css')
//import ReactTableIndex from '../components/reactTableIndex';
var Collapse = function Collapse() {
    return _react2.default.createElement(
        _reactBootstrap.PanelGroup,
        null,
        _react2.default.createElement(
            _reactBootstrap.Panel,
            { collapsible: true, header: 'CREATE BCP REPORT', eventKey: '1' },
            _react2.default.createElement(_bcpForm2.default, null)
        )
    );
};

exports.default = Collapse;