'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialOrderState = {
  listData: [],
  dups: '',
  system: [],
  subsystem: [],
  devices: '',
  bcpEditData: [],
  snapshotid: [],
  dropdown: [],
  userRoles: [],
  snapShotHourlyData: [],
  bcpUpdateMsg: "",
  latestData: '',
  bcpIncidentId: '',
  defaultSnapshotDailyOption: {},
  commentUpdated: false,
  commentUpdatedImpact: false,
  commentUpdatedOutage: false,
  commentUpdateField: false,
  commentUpdateCommercialP: false,
  commercialUtilityFlag: false,
  impactFiberCommentUpdated: false,
  bcpSummaryData: [],
  impact: -1,
  outage: -1,
  power: -1,
  field: -1,
  comment: -1,
  powerFiber: -1,
  headfacility: -1,
  loadingDetailView: true,
  systemSelected: '',
  userEmail: '',
  userInfo: '',
  bcpImpactData: [],
  manual: 0,
  impactDataOff: [],
  impactDataOffOut: [],
  impactViewDa: {},
  commercialUtility: -1,
  cwpCount: 0,
  timeStamp: '',
  powerSupply: false,
  headendFacility: false,
  adminData: [],
  mapBoundaryData: [],
  fea: [],
  Emailmsg: false,
  unique: false,
  pow: 0,
  marker: [],
  onlineImpactDetails: [],
  impactOffDatas: [],
  impactOffDatasWithOut: [],
  markerArr: [],
  alertDelete: '',
  configInterval: false,
  duplicateHeadend: false
};

function categories() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialOrderState;
  var action = arguments[1];

  switch (action.type) {
    case "CREATED_BCP_SUCCESS":
      return _extends({}, state, { dups: action.categories, bcpIncidentId: action.bcpIncidentId, devices: '' });
    case "FETCH_BCPLIST_SUCCESS":
      var bcp = [];
      if (action.categories !== undefined) {
        if (action.categories.length > 0) {
          bcp = action.categories[0].bcpincidentid;
        }
      }
      return _extends({}, state, { listData: action.categories, latestData: bcp });
    case "FETCH_USER_SUCCESS":
      var users = action.categories;
      var user = [];
      if (users !== undefined) {
        if (users.length > 0) {
          users.map(function (item) {
            var roles = { label: '', value: '' };
            roles["label"] = item.username;roles["value"] = item.username;
            user.push(roles);
          });
        }
      }
      return _extends({}, state, { userRoles: user, bcpUpdateMsg: "", commentUpdated: false, commentUpdatedImpact: false,
        commentUpdatedOutage: false, commentUpdateField: false, commentUpdateCommercialP: false, commercialUtilityFlag: false, powerSupply: false,
        headendFacility: false, unique: false, manual: 0, loadingDetailView: true });
    case "FETCH_DROPDOWN_SUCCESS":
      var arr = action.categories;
      var sys = [];
      if (arr !== undefined) {
        if (arr.systemSubsystemList.length > 0) {
          arr.systemSubsystemList.map(function (item) {
            var system = { label: '', value: '' };
            system["label"] = item.System;system["value"] = item.systemid;
            sys.push(system);
          });
        }
      }
      return _extends({}, state, { system: sys, dropdown: action.categories });
    case "SYSTEM_DROPDOWN":
      var arr1 = state.dropdown.systemSubsystemList;
      var subsys = [];
      if (arr1 !== undefined) {
        if (arr1.length > 0) {
          arr1.map(function (item) {
            if (action.data === item.systemid) {
              item.SubSystems.map(function (d) {
                var snap = { label: '', value: '' };
                snap["label"] = d.subsystemname;snap["value"] = d.subsystemid;
                subsys.push(snap);
              });
              if (subsys[0].label === "" && subsys[0].value === "") {
                subsys = [];
              }
            }
          });
        }
      }
      return _extends({}, state, { subsystem: subsys, dups: '', snapshotid: [] });
    case "FETCH_PREINCIDENT_SUCCESS":
      var arr2 = action.categories;
      var snapShot = [];
      if (arr2 !== undefined) {
        if (arr2.length > 0) {
          arr2.map(function (d) {
            var snap = { label: '', value: '' };
            snap["label"] = d.snapshotname;snap["value"] = d.snapshotid;
            //`${d.snapshotname} | Online: ${d.onlinedevicesCount}`; snap["value"] = d.snapshotid; 
            snapShot.push(snap);
          });
        }
      }
      return _extends({}, state, { snapshotid: snapShot });
    case "SNAPSHOT_Hourly":
      var arr3 = action.snapShotData.snapShotData.systemSubsystemTwoHourList;
      var snapIdHour = [];
      if (arr3 !== undefined) {
        if (arr3.length > 0) {
          arr3.map(function (item) {
            var snap = { label: '', value: '' };
            if (item.isManual === 'Y') {
              snap["label"] = item.twohrSnapshotName + ' Manual';
              snap["value"] = item.twohrSnapshotId;
            } else {
              snap["label"] = item.twohrSnapshotName;
              snap["value"] = item.twohrSnapshotId;
            }
            snapIdHour.push(snap);
          });
        }
      }
      var def = [];
      if (snapIdHour.length > 0) {
        def = snapIdHour[0];
      } else {
        def = [];
      };
      return _extends({}, state, { snapShotHourlyData: snapIdHour, defaultSnapshotDailyOption: def,
        dups: '', bcpIncidentId: '', bcpUpdateMsg: "", commentUpdated: false, commentUpdatedImpact: false,
        commentUpdatedOutage: false, commentUpdateField: false, commentUpdateCommercialP: false,
        commercialUtilityFlag: false, powerSupply: false, headendFacility: false, manual: 0, loadingDetailView: true });
    case "BCP_EDITABLE_DATA":
      return _extends({}, state, { bcpEditData: action.bcpEditabData.bcpEditabData, bcpUpdateMsg: "", commentUpdated: false, commentUpdatedImpact: false,
        commentUpdatedOutage: false, commentUpdateField: false, commentUpdateCommercialP: false,
        systemSelected: action.bcpEditabData.bcpEditabData.systemName, commercialUtilityFlag: false,
        powerSupply: false, headendFacility: false, unique: false, manual: 0, loadingDetailView: true });
    case "UPDATED_BCP_SUCCESS":
      return _extends({}, state, { bcpUpdateMsg: action.categories });
    case "FETCH_ONLINEDEVICE_SUCCESS":
      return _extends({}, state, { devices: action.data });
    case "SAVE_BCP_SUMMARY_SUCCESS":
      return _extends({}, state, { commentUpdated: true });
    case "ALERT_MSG":
      return _extends({}, state, { commentUpdated: false });
    case "SAVE_IMPACT_SUMMARY_COMMENTS":
      return _extends({}, state, { commentUpdatedImpact: true });
    case "IMPACT_ALERT_MSG":
      return _extends({}, state, { commentUpdatedImpact: false });
    case "SAVE_OUTAGE_COMMENTS":
      return _extends({}, state, { commentUpdatedOutage: true });
    case "OUTAGE_ALERT_MSG":
      return _extends({}, state, { commentUpdatedOutage: false });
    case "SAVE_COMMERCIALP_COMMENTS":
      return _extends({}, state, { commentUpdateCommercialP: true });
    case "COMMERCIAL_ALERT_MSG":
      return _extends({}, state, { commentUpdateCommercialP: false });
    case "SAVE_FIELDS_COMMENTS":
      return _extends({}, state, { commentUpdateField: true });
    case "FIELDS_ALERT_MSG":
      return _extends({}, state, { commentUpdateField: false });
    case "SAVE_COMMERCIALP_UTILITY":
      return _extends({}, state, { commercialUtilityFlag: true, cwpCount: action.count });
    case "SAVE_IMPACT_FIBER_COMMENTS":
      return _extends({}, state, { impactFiberCommentUpdated: false });
    case 'FETCH_SUMMARY_SUCCESS':
      var impDataOff = void 0,
          impDataOfOut = [];
      var arr4 = action.summaryFetchDatas.snapshotsummaryList;
      arr4.map(function (item) {
        return item.sectionvalue = JSON.parse(item.sectionvalue);
      });
      var ms = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('IMPACT_SUMMARY');
      var fi = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('IMPACT_SUMMARY_FIBER');
      var os = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('OUTAGE_SUMMARY');
      var ps = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('POWER_SUMMARY');
      var fss = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('FIELD_SERVICE_SUMMARY');
      var hfs = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('FACILITY_ALARM_SUMMARY');
      var c = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('COMMENTS');
      var impDaOff = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('IMPACTED_DATA_OFF');
      var imDaOffWithOut = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('IMPACTED_DATA_OFF_WITH_OUTAGES');
      var cpu = arr4.map(function (e) {
        return e.sectiontype;
      }).indexOf('POWER_SUMMARY_BY_UTILITY');
      console.log(arr4);
      var result = 0;
      if (cpu !== -1) {
        // var utility = [];
        // arr4[cpu].sectionvalue.map((d) => { if(d.cwp>=0 || d.cwp==="" ||d.cwp===null ) { utility.push(d.cwp);}})
        // if(utility.length > 0) {
        //   result = utility.reduce((data, val) => data + val); } else {
        //   result = 0;
        // }
        var res = arr4[cpu].sectionvalue.map(function (accumulator) {
          return accumulator.cwp;
        });
        result = res.reduce(function (data, val) {
          return data + val;
        });
      } else {
        result = 0;
      }
      if (arr4[impDaOff].sectionvalue !== null) {
        if (impDaOff !== -1) {
          impDataOff = arr4[impDaOff].sectionvalue;
        }
      } else {
        impDaOff = -1;
      }
      if (imDaOffWithOut !== -1) {
        impDataOfOut = arr4[imDaOffWithOut].sectionvalue;
      }

      return _extends({}, state, { bcpSummaryData: arr4, impact: ms, outage: os, power: ps, field: fss, commercialUtility: cpu, powerFiber: fi,
        comment: c, headfacility: hfs, commentUpdated: false, commentUpdatedImpact: false,
        commentUpdatedOutage: false, commentUpdateField: false, commentUpdateCommercialP: false,
        commercialUtilityFlag: false, powerSupply: false, headendFacility: false, unique: false,
        timeStamp: action.summaryFetchDatas.timestamp, cwpCount: result, manual: 0, loadingDetailView: false
        // case "CREDENTIAL_DETAILS":
        //   return {...state,userEmail:action.userInfo.email, userInfo: action.userInfo}    
      });case "INCLUDE_MANUAL_SNAPSHOT":
      var snapShotM = 0;
      if (action.record === "RECORD SAVED") {
        snapShotM = 1;
      }
      return _extends({}, state, { manual: snapShotM });
    case "IMPACT_VIEW_INFO":
      localStorage.setItem("bcpIncidentId", action.bcpId);
      return _extends({}, state, { powerSupply: false, headendFacility: false, manual: 0 });
    case "SAVE_POWER_SUPPLY":
      return _extends({}, state, { powerSupply: true, pow: 1 });
    case "SAVE_HEADEND_FACILITY":
      return _extends({}, state, { headendFacility: true });
    case "CHANGE_UTILITY_CUSTOMER":
      return _extends({}, state, { cwpCount: action.count });
    case "GET_ADMIN_DETAILS":
      return _extends({}, state, { adminData: action.record, configInterval: false, duplicateHeadend: false });
    case "UPDATE_SUBSYSTEM":
      var subsystem = state.adminData.map(function (e) {
        if (e.systemId === action.id) {
          var subsys = e.adminsubsystemlist.map(function (d) {
            return d.subsystemId;
          }).indexOf(action.subsystem);
          if (subsys === -1) {
            e.adminsubsystemlist.push({ "subsystemId": action.subsystem });
          }
          var headendList = e.adminheadendlist.filter(function (d) {
            return d.adminsubsystemName === "";
          });
          e.adminheadendlist = headendList;
        }
        return e;
      });
      return _extends({}, state, { adminData: subsystem });
    case "DELETE_SUBSYSTEM":
      return _extends({}, state);
    case "FETCH_DETAIL_VIEW_MAP":
      var formattedData = [];
      var _objToPlot = {
        "type": "FeatureCollection",
        "features": ''
      };
      if (action.fetchedData !== undefined) {
        action.fetchedData.map(function (item, i) {
          var val = parseInt(item.perImpact);
          var col = '';
          if (val <= 2) {
            col = "#ff0000";
          } else if (val <= 40) {
            col = "#ff9830";
          } else if (val <= 70) {
            col = "#ffff00";
          } else if (val <= 90) {
            col = "#a0ffa0";
          } else {
            col = "#008000";
          }
          var obj = {
            "type": "Feature",
            "id": "gisYYcox_fiber_node_boundaryYY" + item.myw_smallworld_id,
            "myw": { "feature_type": "cox_fiber_node_boundary" },
            "properties": {
              "name": item.node_num,
              "cox_site_code": item.cox_site_code,
              "id": "gisYYcox_fiber_node_boundaryYY" + item.myw_smallworld_id,
              "perImpact": item.perImpact,
              "fillcolor": col
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": JSON.parse(item.geogson)
            }
          };
          formattedData.push(obj);
        });
      }
      _objToPlot["features"] = formattedData;
      return _extends({}, state, { mapBoundaryData: _objToPlot, fea: _objToPlot.features, unique: true });
    case "RESPONSE_EMAIL":
      return _extends({}, state, { Emailmsg: action.mailRes });
    case "FETCH_MARKER_DATA":
      var formattedMarker = [];

      var filter = function filter(arr) {
        var f = [];
        return arr.filter(function (n) {
          return f.indexOf(n.geogson) == -1 && f.push(n.geogson);
        });
      };

      var marker = filter(action.marker);

      var _objToPlot = {
        "type": "FeatureCollection",
        "features": ''

        //objToPlot["features"] =formattedMarker;
        //return {...state, marker:objToPlot, markerArr:objToPlot.features}
      };return _extends({}, state, { marker: markerD });
    case "FETCH_IMPACT_SUCCESS":
      var finalHeadDataOn = [];
      if (action.ImpactFetchDatas.onlineImpactList.length != 0) {
        var alldata = JSON.parse(action.ImpactFetchDatas.onlineImpactList[0].onlineimpacteddata);
        var filterHeadData = void 0,
            filterHeadDatas = [];
        var e = [];
        alldata.map(function (d, i) {
          var headenName = alldata.map(function (d) {
            return d.hname;
          });
          filterHeadData = headenName.reduce(function (a, b) {
            if (a.indexOf(b) < 0) {
              a.push(b);
            }return a;
          }, []);
          filterHeadDatas = filterHeadData.slice();
          filterHeadData.map(function (f, i) {
            if (filterHeadData[i] == filterHeadDatas[i]) {
              finalHeadDataOn[i] = alldata.filter(function (e) {
                return e.hname == filterHeadData[i];
              });
            }
          });
        });
      } else {
        finalHeadDataOn = [];
      }
      return _extends({}, state, { bcpImpactData: finalHeadDataOn });
    case "IMPACT_OFFLINE_DATA":
      var finalHeadDataOff = [];
      if (action.record.record.length <= 0) {
        finalHeadDataOff = [];
      } else {
        var _alldata = action.record.record;
        var _filterHeadData = void 0,
            _filterHeadDatas = [];
        var _e = [];
        _alldata.map(function (d, i) {
          var headenName = _alldata.map(function (d) {
            return d.hname;
          });
          _filterHeadData = headenName.reduce(function (a, b) {
            if (a.indexOf(b) < 0) {
              a.push(b);
            }return a;
          }, []);
          _filterHeadDatas = _filterHeadData.slice();
          _filterHeadData.map(function (f, i) {
            if (_filterHeadData[i] == _filterHeadDatas[i]) {
              finalHeadDataOff[i] = _alldata.filter(function (e) {
                return e.hname == _filterHeadData[i];
              });
            }
          });
        });
      }
      return _extends({}, state, { impactDataOff: finalHeadDataOff });
    case "IMPACT_OFFLINE_WITH_DATA":
      var finalHeadData = [];
      if (action.record.record.length <= 0) {
        finalHeadData = [];
      } else {
        var _alldata2 = action.record.record;
        var _filterHeadData2 = void 0,
            _filterHeadDatas2 = [];
        var _e2 = [];
        _alldata2.map(function (d, i) {
          var headenName = _alldata2.map(function (d) {
            return d.hname;
          });
          _filterHeadData2 = headenName.reduce(function (a, b) {
            if (a.indexOf(b) < 0) {
              a.push(b);
            }return a;
          }, []);
          _filterHeadDatas2 = _filterHeadData2.slice();
          _filterHeadData2.map(function (f, i) {
            if (_filterHeadData2[i] == _filterHeadDatas2[i]) {
              finalHeadData[i] = _alldata2.filter(function (e) {
                return e.hname == _filterHeadData2[i];
              });
            }
          });
        });
      }
      return _extends({}, state, { impactDataOffOut: finalHeadData });
    case "IMPACT_DETAIL_VIEW":
      var onliIm = [];
      if (action.record.length <= 0) {
        onliIm = [];
      } else {
        onliIm = action.record;
      }
      return _extends({}, state, { onlineImpactDetails: onliIm });
    case "IMPACT_OFFLINE_DETAILS_VIEW":
      var offLineW = [];
      if (action.record.record.length <= 0) {
        offLineW = [];
      } else {
        offLineW = action.record.record;
      }
      return _extends({}, state, { impactOffDatas: offLineW });
    case "IMPACT_OFFLINE_DETAILS_WITH_DATA":
      var offLImp = [];
      if (action.record.record.length <= 0) {
        offLImp = [];
      } else {
        offLImp = action.record.record;
      }
      return _extends({}, state, { impactOffDatasWithOut: offLImp });
    case "DELETE_SUCCESS_MESSAGE":
      var status = false;
      if (action.msg === "success") {
        status = true;
      }
      return _extends({}, state, { alertDelete: status });
    case "SAVE_CONFIG_SUCCESS":
      return _extends({}, state, { configInterval: true });
    case "DUPLICATE_HEADEND":
      return _extends({}, state, { duplicateHeadend: true });
    default:
      return state;
  }
}

exports.default = categories;