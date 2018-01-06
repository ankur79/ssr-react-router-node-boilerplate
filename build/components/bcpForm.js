'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _reactBsNotifier = require('react-bs-notifier');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import '../css/bcpForm.css';

//import  'react-select/dist/react-select.css';


//require('../css/bcpForm.css')
//import 'react-datetime/css/react-datetime.css';
//import { userInfoMethod } from '../actions';

var BcpForm = function (_Component) {
    _inherits(BcpForm, _Component);

    function BcpForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BcpForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BcpForm.__proto__ || Object.getPrototypeOf(BcpForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            incident_id: '',
            bcp_date: '',
            bcp_date_select: '',
            alertVisible: true,
            preIncidentBaseline: '',
            incidentCommander: '',
            system: '',
            subSystem: '',
            btnTitle: "Select Pre Incident Baseline",
            formValues: {
                "ticketnumber": "",
                "bcpname": '',
                "isdeleted": "N",
                "subSystemid": '',
                "systemid": '',
                "bcpstatus": 'P',
                "incidentdescription": '',
                "createdby": '',
                "snapshotid": '',
                "bcpcreationdate": ''
            }
        }, _this.handleChangeSelect = function (e) {
            if (e !== null) {
                _this.state.formValues.snapshotid = e.value;
                // let val = `${e.snapshotname} | offline: ${e.onlinedevicesCount}`;
                _this.setState({ preIncidentBaseline: e });
            }
        }, _this.handleChange = function (e) {
            var formValues = _this.state.formValues;
            var name = e.target.name;
            var value = e.target.value;
            formValues[name] = value;
            _this.setState({ formValues: formValues });
        }, _this.logChange = function (subSystem) {
            var date = (0, _moment2.default)(_this.state.bcp_date_select).format('MM-DD-YYYY');
            if (subSystem !== null) {
                var bcpnameF = 'BCP-' + _this.state.system.label + '-' + subSystem.label + '-' + date;
                _this.state.formValues.bcpname = bcpnameF;
                _this.state.formValues.subSystemid = subSystem.value;
                var system = _this.state.formValues.systemid;
                _this.setState({ subSystem: subSystem });
                var both;
                both = 'systemId=' + system + '&subSystemId=' + subSystem.value;
                _this.props.preincidentData(both);
            } // Calling the preincident baseline snapshot dropdown
        }, _this.handleDate = function (e) {
            var value = e;
            _this.setState({ bcp_date_select: value });
            var date = (0, _moment2.default)(e).format('MM-DD-YYYY');
            // var timestamp = new Date(myDate).getTime(); 
            // this.state.formValues.bcpcreationdate = timestamp;
            var bcpname = void 0;
            if (_this.state.system === '' && _this.state.subSystem === '') {
                bcpname = 'BCP-' + date;
            }
            if (_this.state.system !== '') {
                bcpname = 'BCP-' + _this.state.system.label + '-' + date;
            }
            if (_this.state.system !== '' && _this.state.subSystem !== '') {
                bcpname = 'BCP-' + _this.state.system.label + '-' + _this.state.subSystem.label + '-' + date;
            }
            _this.state.formValues.bcpname = bcpname;
            // this.setState({bcp_date_select: e.target.value });
        }, _this.handleName = function (incidentCommander) {
            _this.state.formValues.createdby = incidentCommander.value;
            _this.setState({ incidentCommander: incidentCommander });
        }, _this.handleSystemChange = function (system) {
            var date = (0, _moment2.default)(_this.state.bcp_date_select).format('MM-DD-YYYY');
            if (system !== null) {
                var bcpname = 'BCP-' + system.label + '-' + date;
                _this.state.formValues.bcpname = bcpname;
                _this.state.formValues.systemid = system.value;
                var arr1 = _this.props.dropdownData;
                var subsys = [];
                /* clearing the subsystem dropdown when you don't have data for the system */
                arr1.systemSubsystemList.map(function (item) {
                    if (system.value === item.systemid) {
                        item.SubSystems.map(function (d) {
                            var snap = { label: '', value: '' };
                            snap["label"] = d.subsystemname;
                            snap["value"] = d.subsystemid;
                            subsys.push(snap);
                        });
                        if (subsys[0].label === "" && subsys[0].value === "") {
                            subsys = [];
                        }
                    }
                });
                if (subsys.length === 0) {
                    var single;
                    single = 'systemId=' + _this.state.formValues.systemid;
                    _this.props.preincidentData(single);
                }
                _this.props.subsystemData(system.value); //to get the subsystem dropdown date
                _this.state.subSystem = '';
                _this.state.formValues.subSystemid = '';
                //this.state.btnTitle = 'Select Pre Incident Baseline';
                _this.state.preIncidentBaseline = ''; // empty the preincident selection
                _this.setState({ system: system });
            }
        }, _this.clearForm = function () {
            document.getElementById("bcpform").reset();
            _this.setState({
                subSystem: "",
                system: "",
                preIncidentBaseline: "",
                btnTitle: "Select Pre Incident Baseline",
                formValues: {
                    "ticketnumber": "",
                    "bcpname": '',
                    "isdeleted": "N",
                    "subSystemid": '',
                    "systemid": '',
                    "bcpstatus": 'IN',
                    "incidentdescription": '',
                    "createdby": '',
                    "snapshotid": '',
                    "bcpcreationdate": ''
                }
            });
        }, _this.handleAlertDismiss = function () {
            _this.setState({ alertVisible: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BcpForm, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.userEmail !== nextProps.userEmail) {
                this.state.formValues.createdby = nextProps.userEmail;
            }
        }
        /*Get the curent date and set it in date field onload */

    }, {
        key: 'getCurrentDate',
        value: function getCurrentDate() {
            // var today = new Date();
            // var dd = today.getDate();
            // var mm = today.getMonth()+1; //January is 0!
            // var yyyy = today.getFullYear();
            // if ( dd < 10 ) { dd='0'+dd; } 
            // if ( mm < 10 ) { mm='0'+mm; } 
            // today = yyyy+'-'+mm+'-'+dd;
            var mObject = (0, _moment2.default)();
            var newTimestamp = (0, _moment2.default)(mObject).valueOf();
            var date = new Date(newTimestamp);
            this.state.formValues.bcpcreationdate = newTimestamp;
            this.setState({ bcp_date: mObject, bcp_date_select: mObject });
            // var timestamp = new Date(today).getTime(); 
            // this.state.formValues.bcpcreationdate = timestamp;
            // this.setState({bcp_date:today, bcp_date_select: today});
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getCurrentDate();
            this.props.dropDownData();
            this.props.userRolesData();
        }

        /* Preincident baseline on change event and set the state*/

        /* For all the input types set the state*/

        /*On change event for subsystem dropdown adn update the set*/


        /* On change event for start date and update the state & bcp Report name accordingly */


        /* Updated the state for incident commander*/

    }, {
        key: 'validateSubSystem',


        /* validate the subsystem selection*/
        value: function validateSubSystem() {
            if (this.props.dropdownSubsystem.length > 0) {
                var length = this.state.subSystem.length;
                if (length < 0 || length === 0) return "error";else return "success";
            } else {
                return "success";
            }
        }

        /* On change of system dropdown events*/


        /* Clear the date when clear button is clicked*/

    }, {
        key: 'saveData',

        /* Create bcp is clicked call the api*/
        value: function saveData(res) {
            //var newTimestamp =  moment(this.state.bcp_date_select).valueOf();
            //var newTimestamp = moment(this.state.bcp_date_select).format("YYYY-MM-DD HH:mm:ss");
            var newTimestamp = (0, _moment2.default)(this.state.bcp_date_select).tz("EST").format("YYYY-MM-DD HH:mm:ss");
            //var timestamp = new Date(this.state.bcp_date_select).getTime();
            this.state.formValues.bcpcreationdate = newTimestamp;
            this.setState({ alertVisible: true });
            console.log(res);
            this.props.createBcp(res);
            this.clearForm();
        }
        /* Validate incident commander field*/

    }, {
        key: 'validateIncidentNo',
        value: function validateIncidentNo() {
            var length = this.state.formValues.ticketnumber.length;
            if (length < 3) return "error";else return "success";
            return null;
        }
        /* Validate incident commander email check*/

    }, {
        key: 'validateIncidentCommander',
        value: function validateIncidentCommander() {
            var length = this.state.formValues.createdby.length;
            var email = this.state.formValues.createdby;
            if (length > 0) {
                var lastAtPos = email.lastIndexOf('@');
                var lastDotPos = email.lastIndexOf('.');
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && email.length - lastDotPos > 2)) {
                    return "error";
                } else {
                    return "success";
                }
            } else if (length < 3) {
                return "error";
            } else return "success";
            return null;
        }
        /* Validate system field*/

    }, {
        key: 'validateSystem',
        value: function validateSystem() {
            var length = this.state.system.length;
            if (length < 0 || length === 0) return "error";else {
                return "success";
            }
            return null;
        }
        /* Validate preincident baseline field*/

    }, {
        key: 'validatepreIncidentBaseline',
        value: function validatepreIncidentBaseline() {
            var length = this.state.formValues.snapshotid.length;
            if (length < 0 || length === 0) return "error";else return "success";
            return null;
        }
        /* Validate description field*/

    }, {
        key: 'validateIncidentDescription',
        value: function validateIncidentDescription() {
            var length = this.state.formValues.incidentdescription.length;
            if (length < 3) return "error";
            if (length > 1000) return "error";else return "success";
            return null;
        }
        /* Validate for start date*/

    }, {
        key: 'validateIncDate',
        value: function validateIncDate() {
            var date = this.state.bcp_date_select;
            if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === "object") {
                return "success";
            } else if (typeof date === "string") {
                return "error";
            }
        }
        /* Duplicate Alert message*/

    }, {
        key: 'handleKey',


        /* Start date input field will not allow them to type*/
        value: function handleKey(e) {
            var value = e;
            this.setState({ bcp_date_select: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var flag = false;
            if (this.validateIncDate() === "success" && this.validatepreIncidentBaseline() === "success" && this.validateIncidentDescription() === "success" && this.validateSystem() === "success" && this.validateIncidentCommander() === "success" && this.validateIncidentNo() === "success" && this.validateSubSystem() === "success") {
                flag = true;
            }
            var testData = this.props.dropdownSubsystem;
            var alert = [{
                id: 1,
                type: "danger",
                message: "Duplicate BCP cannot be created"

            }];
            var button = null;
            if (this.props.bcpIncidentId === 0) {
                button = this.state.alertVisible ? _react2.default.createElement(_reactBsNotifier.AlertList, { alerts: alert, onDismiss: function onDismiss() {
                        return _this2.handleAlertDismiss();
                    }, timeout: 1500, style: { marginBottom: 0, fontSize: 14 } }) : "";
                //this.state.alertVisible?<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissafter={1500}><h4 style={{marginBottom:0, fontSize: 14}}>Duplicate BCP cannot be created</h4></Alert>:""
            } else {
                button = null;
            }
            var _state = this.state,
                formValues = _state.formValues,
                bcp_date = _state.bcp_date,
                incident_id = _state.incident_id,
                system = _state.system,
                subSystem = _state.subSystem,
                bcp_date_select = _state.bcp_date_select;

            var incidentCommander = this.state.formValues.createdby;
            var controlLabel = { fontFamily: 'Roboto Regular,Roboto', fontWeight: '400', fontStyle: 'normal', fontSize: '12px' };
            var options = this.props.userRoles;
            var systemOptions = this.props.dropdownSystem;
            var preIncidentBaselineOpt = this.props.dropdownSnapshot;
            //blocks date before today's date in the calender
            var today = _reactDatetime2.default.moment();
            var valid = function valid(current) {
                return current.isBefore(today);
            };
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'form',
                    { id: 'bcpform' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'Date', validationState: this.validateIncDate() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Start Date'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(_reactDatetime2.default, { onChange: this.handleDate, isValidDate: valid, ref: 'validateDate', selectedDate: bcp_date_select, value: bcp_date_select })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-2' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'IncidentNo', validationState: this.validateIncidentNo() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Ticket Number'
                                ),
                                _react2.default.createElement(_reactBootstrap.FormControl, {
                                    name: 'ticketnumber',
                                    type: 'text',
                                    defaultValue: formValues["ticketnumber"],
                                    placeholder: 'Enter Incident No',
                                    onChange: this.handleChange
                                }),
                                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'incidentCommander', validationState: this.validateIncidentCommander() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Incident Commander Email'
                                ),
                                _react2.default.createElement(_reactBootstrap.FormControl, {
                                    name: 'createdby',
                                    type: 'text',
                                    onChange: this.handleChange,
                                    value: formValues["createdby"],
                                    placeholder: 'Enter Incident Commander Email'
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'formBasicText1', validationState: this.validateSystem() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'System'
                                ),
                                _react2.default.createElement(_reactSelect2.default, {
                                    clearable: false,
                                    name: 'System',
                                    placeholder: 'Select System',
                                    onChange: this.handleSystemChange,
                                    options: systemOptions,
                                    value: system })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'formSubSystem', validationState: this.validateSubSystem() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Sub System'
                                ),
                                _react2.default.createElement(_reactSelect2.default, {
                                    clearable: false,
                                    name: 'form-field-name',
                                    value: subSystem,
                                    options: testData,
                                    onChange: this.logChange,
                                    placeholder: 'Select Sub System'
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'formBasicText2', validationState: this.validatepreIncidentBaseline() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Pre Incident Baseline'
                                ),
                                _react2.default.createElement(_reactSelect2.default, {
                                    name: 'preIncidentBaseline',
                                    clearable: false,
                                    placeholder: 'Select Pre-Incident Snapshot',
                                    onChange: this.handleChangeSelect,
                                    options: preIncidentBaselineOpt,
                                    value: this.state.preIncidentBaseline })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'bcp_reportName' },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'BCP Report'
                                ),
                                _react2.default.createElement(_reactBootstrap.FormControl, {
                                    disabled: true,
                                    name: 'bcpname',
                                    type: 'text',
                                    value: formValues["bcpname"],
                                    placeholder: 'BCP Report Name'
                                }),
                                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-8' },
                            _react2.default.createElement(
                                _reactBootstrap.FormGroup,
                                { controlId: 'formControlsTextarea', validationState: this.validateIncidentDescription() },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    { style: controlLabel },
                                    'Description'
                                ),
                                _react2.default.createElement(_reactBootstrap.FormControl, {
                                    name: 'incidentdescription',
                                    type: 'text',
                                    onChange: this.handleChange,
                                    value: formValues["incidentdescription"],
                                    placeholder: 'Enter Description for BCP Report'
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement('div', { className: 'col-md-2' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-3' },
                            button
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-7' },
                            flag ? _react2.default.createElement('input', { type: 'button', className: 'btn btn-primary', onClick: function onClick() {
                                    return _this2.saveData(formValues);
                                }, value: 'CREATE' }) : _react2.default.createElement('input', { type: 'button', className: 'btn btn-default', value: 'CREATE', disabled: true, style: { width: 90, height: 30 } }),
                            '\xA0\xA0\xA0',
                            _react2.default.createElement('input', { type: 'button', className: 'btn btn-primaryClear', onClick: function onClick() {
                                    return _this2.clearForm();
                                }, value: 'CLEAR' })
                        )
                    )
                )
            );
        }
    }]);

    return BcpForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        bcpMsg: state.categories.dups,
        dropdownSystem: state.categories.system,
        dropdownSnapshot: state.categories.snapshotid,
        dropdownSubsystem: state.categories.subsystem,
        bcpreport: state.categories.bcpreport,
        dropdownData: state.categories.dropdown,
        userRoles: state.categories.userRoles,
        bcpIncidentId: state.categories.bcpIncidentId,
        userEmail: state.categories.userEmail
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        createBcp: function createBcp(data) {
            dispatch((0, _actions.createBcpData)(data));
        },
        dropDownData: function dropDownData() {
            dispatch((0, _actions.dropdownFetchData)());
        },
        subsystemData: function subsystemData(data) {
            dispatch((0, _actions.systemDropdown)(data));
        },
        preincidentData: function preincidentData(both) {
            dispatch((0, _actions.preIncidentFetchData)(both));
        },
        userRolesData: function userRolesData() {
            dispatch((0, _actions.userRolesData)());
        }
        //userInfo: (data) => { dispatch(userInfoMethod(data)); },
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BcpForm);