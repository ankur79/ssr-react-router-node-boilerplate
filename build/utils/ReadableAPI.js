'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHeadend = exports.configInterval = exports.deleteBcpId = exports.impactOffWithViewDataMethod = exports.impactOffViewAllData = exports.impactOfflineWithData = exports.impactOfflineAllData = exports.impactOnline = exports.getMarkerApi = exports.bcpSendEmailApi = exports.DetailViewMapData = exports.DeleteSubsystem = exports.UpdateHeadend = exports.AdminData = exports.ImpactFetchData = exports.ManualSnapshotUpdate = exports.SummaryFetchData = exports.saveBCPComments = exports.updateBcp = exports.bcpDetailEditApi = exports.onlineDevicesData = exports.snapshotHourlyData = exports.preincidentData = exports.systemSnapshotData = exports.usersData = exports.bcpListData = exports.updateStatusClose = exports.createBcp = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var src = "http://bcpapi-bcp-dev.eps-nonprd.corp.cox.com/bcpapi/bcpincidents/v1/";
//const src = "http://localhost:9090/bcpapi/bcpincidents/v1/";

var createBcp = exports.createBcp = function createBcp(post) {
  return _axios2.default.post(src + 'createIncident', post).then(function (response) {
    return response;
  });
};

var updateStatusClose = exports.updateStatusClose = function updateStatusClose(id) {
  return _axios2.default.put(src + 'closingIncident/bcpincidentid=' + id).then(function (response) {
    return response;
  });
};

var bcpListData = exports.bcpListData = function bcpListData(data) {
  return fetch(src + 'getIncidentData', { method: 'GET' }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
};

var usersData = exports.usersData = function usersData() {
  return fetch(src + 'getUserRoles', { method: 'GET' }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
};

var systemSnapshotData = exports.systemSnapshotData = function systemSnapshotData(data) {
  return fetch(src + 'getSystemSubsystemList', { method: 'GET' }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
};

var preincidentData = exports.preincidentData = function preincidentData(both) {
  return _axios2.default.get(src + 'getSnapShotIdList?' + both).then(function (response) {
    return response;
  });
};

var snapshotHourlyData = exports.snapshotHourlyData = function snapshotHourlyData(id) {
  return fetch(src + 'getSnapShotTwoHourList/bcpincidentid=' + id, { method: 'GET' }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
};

var onlineDevicesData = exports.onlineDevicesData = function onlineDevicesData(dsid, sid) {
  return _axios2.default.get(src + 'getDevicesCount?dailysnapshotid=' + dsid + '&systemid=' + sid).then(function (response) {
    return response;
  });
};

var bcpDetailEditApi = exports.bcpDetailEditApi = function bcpDetailEditApi(id) {
  return fetch(src + 'getIncidentById/bcpincidentid=' + id, { method: 'GET' }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
};

var updateBcp = exports.updateBcp = function updateBcp(postdata) {
  return _axios2.default.put(src + 'updateIncident', postdata).then(function (response) {
    return response;
  });
};

var saveBCPComments = exports.saveBCPComments = function saveBCPComments(postdata) {
  return _axios2.default.put(src + 'saveBcpSummarySection', postdata).then(function (response) {
    return response;
  });
};

var SummaryFetchData = exports.SummaryFetchData = function SummaryFetchData(id) {
  return _axios2.default.get(src + 'getSnapshotSummary/bcpsnapshotid=' + id).then(function (response) {
    return response;
  });
};

var ManualSnapshotUpdate = exports.ManualSnapshotUpdate = function ManualSnapshotUpdate(data) {
  return _axios2.default.post(src + 'createManualSnapshot/', data).then(function (response) {
    return response;
  });
};

var ImpactFetchData = exports.ImpactFetchData = function ImpactFetchData(snapShotId, systemId, subSystemId) {
  return _axios2.default.get(src + 'getImpactdataOnline?dailysnapshotid=' + snapShotId + '&systemId=' + systemId + '&subSystemId=' + subSystemId).then(function (response) {
    return response;
  });
};

var AdminData = exports.AdminData = function AdminData() {
  return _axios2.default.get(src + 'getAdminList').then(function (response) {
    return response;
  });
};

var UpdateHeadend = exports.UpdateHeadend = function UpdateHeadend(data) {
  return _axios2.default.put(src + 'addSubsystem', data).then(function (response) {
    return response;
  });
};

var DeleteSubsystem = exports.DeleteSubsystem = function DeleteSubsystem(data) {
  return _axios2.default.put(src + 'deleteSubsystem', data).then(function (response) {
    return response;
  });
};

var DetailViewMapData = exports.DetailViewMapData = function DetailViewMapData(id, sid) {
  return _axios2.default.get(src + 'incidentgeogson/' + id + '/' + sid).then(function (response) {
    return response;
  });
};

var bcpSendEmailApi = exports.bcpSendEmailApi = function bcpSendEmailApi(reqjs) {
  return _axios2.default.post(src + 'sendMail', reqjs).then(function (response) {
    return response;
  });
};

var getMarkerApi = exports.getMarkerApi = function getMarkerApi(id) {
  return _axios2.default.get(src + 'getMapData/' + id).then(function (response) {
    return response;
  });
};

var impactOnline = exports.impactOnline = function impactOnline(reqOnline) {
  return _axios2.default.post(src + 'getOnlineDataDetails', reqOnline).then(function (response) {
    return response;
  });
};

var impactOfflineAllData = exports.impactOfflineAllData = function impactOfflineAllData(snapId) {
  return _axios2.default.get(src + 'getSnapshotOffflineData/bcpsnapshotid=' + snapId + '/sectiontype=IMPACTED_DATA_OFF').then(function (response) {
    return response;
  });
};

var impactOfflineWithData = exports.impactOfflineWithData = function impactOfflineWithData(snapId) {
  return _axios2.default.get(src + 'getSnapshotOffflineData/bcpsnapshotid=' + snapId + '/sectiontype=IMPACTED_DATA_OFF_WITH_OUTAGES').then(function (response) {
    return response;
  });
};

var impactOffViewAllData = exports.impactOffViewAllData = function impactOffViewAllData(dailysnapshotid, node) {
  return _axios2.default.get(src + 'getSnapshotOffflineDataDetails/bcpsnapshotid=' + dailysnapshotid + '/sectiontype=IMPACTED_DATA_OFF/node=' + node).then(function (response) {
    return response;
  });
};

var impactOffWithViewDataMethod = exports.impactOffWithViewDataMethod = function impactOffWithViewDataMethod(dailysnapshotid, node) {
  return _axios2.default.get(src + 'getSnapshotOffflineDataDetails/bcpsnapshotid=' + dailysnapshotid + '/sectiontype=IMPACTED_DATA_OFF_WITH_OUTAGES/node=' + node).then(function (response) {
    return response;
  });
};

var deleteBcpId = exports.deleteBcpId = function deleteBcpId(id) {
  return _axios2.default.put(src + 'deleteBcpIncident/bcpincidentid=' + id).then(function (response) {
    return response;
  });
};

var configInterval = exports.configInterval = function configInterval(period, frequency) {
  return _axios2.default.put(src + 'updateConfiguration/period=' + period + '/frequency=' + frequency).then(function (response) {
    return response;
  });
};

var addHeadend = exports.addHeadend = function addHeadend(data) {
  return _axios2.default.post(src + 'addHeadend', data).then(function (response) {
    return response;
  });
};

// export const UserInfo = (data) =>
// axios(data).then((response)=>{
//   if(response.status === 200){
//       var data = axios.get('https://coxbcp.predix-uaa.run.aws-usw02-pr.ice.predix.io/userinfo',{headers:{Authorization:'bearer '+response.data.access_token}}).then((res)=>{
//         return res.data;
//       });
//   }
//   return data;
// });