'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import logo from '../utils/cox.png';


var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false,
      isOpen: false
    }, _this.handleOpen = function () {
      _this.setState({ isOpen: true });
    }, _this.handleClose = function () {
      _this.setState({ isOpen: false });
    }, _this.handleClick = function () {
      window.open('https://coxcomminc.sharepoint.com/sites/coxone/Pages/Default.aspx');
    }, _this.handleAdminClick = function () {
      _this.props.redirect();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var hover = this.state.hover;

      var setting = _react2.default.createElement(
        'div',
        { className: 'navInline' },
        _react2.default.createElement('i', { className: 'fa fa-cog fa-2x', 'aria-hidden': 'true' })
      );
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, collapseOnSelect: true },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/list', style: { color: '#fff' } },
              _react2.default.createElement(
                'span',
                { style: { marginLeft: -75 } },
                _react2.default.createElement('img', { src: '../utils/cox.png', style: { width: 86, height: 41, fontFamily: 'Roboto Regular,Roboto', fontWeight: '700', fontStyle: 'normal', fontSize: '16px' }, onClick: this.handleClick }),
                ' \xA0\xA0\xA0',
                _react2.default.createElement(
                  'b',
                  null,
                  'BCP'
                ),
                ' HEALTH TRACKER'
              )
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          { style: { marginRight: -65 } },
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            _react2.default.createElement(
              _reactBootstrap.NavDropdown,
              { title: setting, id: 'nav-dropdown',
                onMouseEnter: this.handleOpen,
                onMouseLeave: this.handleClose,
                defaultOpen: this.state.isOpen,
                noCaret: true },
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { disabled: true },
                'User'
              ),
              _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                null,
                'Log Out'
              ),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { onClick: this.handleAdminClick },
                'Admin'
              ),
              _react2.default.createElement(
                _reactBootstrap.MenuItem,
                { disabled: true },
                'Version/Release'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    redirect: function redirect() {
      dispatch((0, _reactRouterRedux.push)('/admin'));
    }
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

// const navitems = [
//   {link: '#', name: 'Home', title: <Link to="/" style={{color:'#fff'}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>},
//   {link: '#', name: 'Camera', title: <i className="fa fa-camera fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'Comments', title: <div className="fa fa-comment fa-2x" aria-hidden="true"><NotificationBadge count={this.state.num} effect={[null, null]} style={{color: 'white', backgroundColor:'red', top: '-25px', right: '-9px'}}/></div>},
//   {link: '#', name: 'Print', title: <i className="fa fa-print fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'Download', title: <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'LogOut', title: <i className="fa fa-user fa-2x" aria-hidden="true"></i>}  
// ];      
// {navitems.map(item => {
//   return <NavItem key={navitems.indexOf(item)} link={item.link}> <div className="navInline">{item.title} <h4 className="navTextMobile">{item.name}</h4></div></NavItem>;
//   })}