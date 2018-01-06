'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLoadError = apiLoadError;
exports.loadInProgress = loadInProgress;
exports.fetchCategorySuccess = fetchCategorySuccess;
exports.fetchDropDownSuccess = fetchDropDownSuccess;
exports.fetchPreincidentSuccess = fetchPreincidentSuccess;
exports.fetchOnlineDeviceSuccess = fetchOnlineDeviceSuccess;
exports.createdBCPSuccess = createdBCPSuccess;
exports.snapShotHourlyAction = snapShotHourlyAction;
exports.bcpDetailEditAction = bcpDetailEditAction;
exports.updateBCPSuccess = updateBCPSuccess;
exports.systemDropdown = systemDropdown;
exports.fetchUserSuccess = fetchUserSuccess;
exports.saveBCPSuccess = saveBCPSuccess;
exports.alertMsg = alertMsg;
exports.saveBCPImapactSuccess = saveBCPImapactSuccess;
exports.impactAlertMsg = impactAlertMsg;
exports.saveBCPOutageSuccess = saveBCPOutageSuccess;
exports.saveBCPImpactFiberSuccess = saveBCPImpactFiberSuccess;
exports.outageAlertMsg = outageAlertMsg;
exports.CommercialPAlertMsg = CommercialPAlertMsg;
exports.saveBCPCommercialSuccess = saveBCPCommercialSuccess;
exports.saveBCPFieldSSuccess = saveBCPFieldSSuccess;
exports.saveCommercialUtilitySuccess = saveCommercialUtilitySuccess;
exports.savePowerSupply = savePowerSupply;
exports.saveHeadendFacility = saveHeadendFacility;
exports.FieldSAlertMsg = FieldSAlertMsg;
exports.bcpSummaryFetch = bcpSummaryFetch;
exports.ImpactFetchAction = ImpactFetchAction;
exports.IncludeManualSnapshot = IncludeManualSnapshot;
exports.impactDataViewAction = impactDataViewAction;
exports.handleChangeUtilityMethod = handleChangeUtilityMethod;
exports.getAdminDetails = getAdminDetails;
exports.updateSubsystemMethod = updateSubsystemMethod;
exports.deleteSubsystem = deleteSubsystem;
exports.fetchDetailViewMapSuccess = fetchDetailViewMapSuccess;
exports.bcpSendEmailSuccess = bcpSendEmailSuccess;
exports.fetchMarkerMap = fetchMarkerMap;
exports.userRolesData = userRolesData;
exports.createBcpData = createBcpData;
exports.updateStatus = updateStatus;
exports.dropdownFetchData = dropdownFetchData;
exports.preIncidentFetchData = preIncidentFetchData;
exports.onlineDevicesFetchData = onlineDevicesFetchData;
exports.listFetchData = listFetchData;
exports.snapShotHourlyMethod = snapShotHourlyMethod;
exports.bcpDetailEditMethod = bcpDetailEditMethod;
exports.updateBcpDataMethod = updateBcpDataMethod;
exports.saveBCPSummaryComments = saveBCPSummaryComments;
exports.saveBCPImapctSummaryComments = saveBCPImapctSummaryComments;
exports.saveBCPOutageSummaryComments = saveBCPOutageSummaryComments;
exports.saveImpactFIberCommentsData = saveImpactFIberCommentsData;
exports.saveBcpCommercialPSummaryData = saveBcpCommercialPSummaryData;
exports.saveBcpFieldSSummaryData = saveBcpFieldSSummaryData;
exports.saveBcpCommercialPUtilityData = saveBcpCommercialPUtilityData;
exports.powerSupplyMethod = powerSupplyMethod;
exports.saveHeadendFacilityData = saveHeadendFacilityData;
exports.bcpSummaryDataMethod = bcpSummaryDataMethod;
exports.bcpImpactDataMethod = bcpImpactDataMethod;
exports.manualSnapshotMethod = manualSnapshotMethod;
exports.impactDataViewMethod = impactDataViewMethod;
exports.updateHeadendData = updateHeadendData;
exports.getAdminData = getAdminData;
exports.deleteAdminSubsystem = deleteAdminSubsystem;
exports.getDetailViewMapData = getDetailViewMapData;
exports.bcpSendEmailMethod = bcpSendEmailMethod;
exports.getMarkerMethod = getMarkerMethod;
exports.getimpactOfflineAllData = getimpactOfflineAllData;
exports.getimpactOfflineWithData = getimpactOfflineWithData;
exports.impactOffAllMethod = impactOffAllMethod;
exports.getImpOffDetaiData = getImpOffDetaiData;
exports.getImpOffWithDetaiData = getImpOffWithDetaiData;
exports.impactOffViewDataMethod = impactOffViewDataMethod;
exports.impactOffWithViewDataMethod = impactOffWithViewDataMethod;
exports.ImpactOnlineMethod = ImpactOnlineMethod;
exports.impactOnlineViewAction = impactOnlineViewAction;
exports.deleteBcpData = deleteBcpData;
exports.deleteBcpTableDataMethod = deleteBcpTableDataMethod;
exports.configData = configData;
exports.saveConfigSuccess = saveConfigSuccess;
exports.addHeadendMethod = addHeadendMethod;
exports.duplicateHeadend = duplicateHeadend;

var _ReadableAPI = require('../utils/ReadableAPI');

var ReadableAPI = _interopRequireWildcard(_ReadableAPI);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function apiLoadError(bool) {
  return {
    type: 'LOAD_ERROR',
    loadErrored: bool
  };
}

function loadInProgress(bool) {
  return {
    type: 'LOAD_INPROGRESS',
    isLoading: bool
  };
}

function fetchCategorySuccess(_ref) {
  var categories = _ref.categories;

  return {
    type: 'FETCH_BCPLIST_SUCCESS',
    categories: categories
  };
}

function fetchDropDownSuccess(_ref2) {
  var categories = _ref2.categories;

  return {
    type: 'FETCH_DROPDOWN_SUCCESS',
    categories: categories
  };
}

function fetchPreincidentSuccess(_ref3) {
  var categories = _ref3.categories;

  return {
    type: 'FETCH_PREINCIDENT_SUCCESS',
    categories: categories
  };
}

function fetchOnlineDeviceSuccess(data) {
  return {
    type: 'FETCH_ONLINEDEVICE_SUCCESS',
    data: data
  };
}

function createdBCPSuccess(categories, bcpIncidentId) {
  return {
    type: 'CREATED_BCP_SUCCESS',
    categories: categories,
    bcpIncidentId: bcpIncidentId
  };
}

function snapShotHourlyAction(snapShotData) {
  return {
    type: 'SNAPSHOT_Hourly',
    snapShotData: snapShotData
  };
}

function bcpDetailEditAction(bcpEditabData) {
  return {
    type: 'BCP_EDITABLE_DATA',
    bcpEditabData: bcpEditabData
  };
}

function updateBCPSuccess(categories) {
  return {
    type: 'UPDATED_BCP_SUCCESS',
    categories: categories
  };
}

function systemDropdown(data) {
  return {
    type: 'SYSTEM_DROPDOWN',
    data: data
  };
}

function fetchUserSuccess(_ref4) {
  var categories = _ref4.categories;

  return {
    type: 'FETCH_USER_SUCCESS',
    categories: categories
  };
}

function saveBCPSuccess(bool) {
  return {
    type: 'SAVE_BCP_SUMMARY_SUCCESS',
    saved: bool
  };
}

function alertMsg() {
  return {
    type: 'ALERT_MSG'
  };
}

function saveBCPImapactSuccess(bool) {
  return {
    type: 'SAVE_IMPACT_SUMMARY_COMMENTS',
    saved: bool
  };
}

function impactAlertMsg() {
  return {
    type: 'IMPACT_ALERT_MSG'
  };
}

function saveBCPOutageSuccess() {
  return {
    type: 'SAVE_OUTAGE_COMMENTS'
  };
}

function saveBCPImpactFiberSuccess() {
  return {
    type: 'SAVE_IMPACT_FIBER_COMMENTS'
  };
}

function outageAlertMsg() {
  return {
    type: 'OUTAGE_ALERT_MSG'
  };
}

function CommercialPAlertMsg() {
  return {
    type: "COMMERCIAL_ALERT_MSG"
  };
}

function saveBCPCommercialSuccess(bool) {
  return {
    type: "SAVE_COMMERCIALP_COMMENTS",
    saved: bool
  };
}

function saveBCPFieldSSuccess(bool) {
  return {
    type: "SAVE_FIELDS_COMMENTS",
    saved: bool
  };
}

function saveCommercialUtilitySuccess(bool, count) {
  return {
    type: "SAVE_COMMERCIALP_UTILITY",
    saved: bool,
    count: count
  };
}

function savePowerSupply(bool) {
  return {
    type: "SAVE_POWER_SUPPLY"
  };
}

function saveHeadendFacility(bool) {
  return {
    type: "SAVE_HEADEND_FACILITY"
  };
}

function FieldSAlertMsg() {
  return {
    type: "FIELDS_ALERT_MSG"
  };
}

function bcpSummaryFetch(_ref5) {
  var summaryFetchDatas = _ref5.summaryFetchDatas;

  return {
    type: 'FETCH_SUMMARY_SUCCESS',
    summaryFetchDatas: summaryFetchDatas
  };
}

// export function userCredentialDetails ({userInfo}){
//   return {
//     type: 'CREDENTIAL_DETAILS',
//     userInfo
//   }
// }

function ImpactFetchAction(_ref6) {
  var ImpactFetchDatas = _ref6.ImpactFetchDatas;

  return {
    type: 'FETCH_IMPACT_SUCCESS',
    ImpactFetchDatas: ImpactFetchDatas
  };
}
function IncludeManualSnapshot(record) {
  return {
    type: "INCLUDE_MANUAL_SNAPSHOT",
    record: record
  };
}

function impactDataViewAction(bcpId) {
  return {
    type: "IMPACT_VIEW_INFO",
    bcpId: bcpId
  };
}

function handleChangeUtilityMethod(count) {
  return {
    type: "CHANGE_UTILITY_CUSTOMER",
    count: count
  };
}

function getAdminDetails(_ref7) {
  var record = _ref7.record;

  return {
    type: "GET_ADMIN_DETAILS",
    record: record
  };
}

function updateSubsystemMethod(subsystem, id) {
  return {
    type: "UPDATE_SUBSYSTEM",
    subsystem: subsystem,
    id: id
  };
}

function deleteSubsystem(bool) {
  return {
    type: "DELETE_SUBSYSTEM"
  };
}

//action for fetching detail view's map data:
function fetchDetailViewMapSuccess(_ref8) {
  var fetchedData = _ref8.fetchedData;

  return {
    type: 'FETCH_DETAIL_VIEW_MAP',
    fetchedData: fetchedData
  };
}

function bcpSendEmailSuccess(mailRes) {
  return {
    type: 'RESPONSE_EMAIL',
    mailRes: mailRes
  };
}

function fetchMarkerMap(_ref9) {
  var marker = _ref9.marker;

  return {
    type: 'FETCH_MARKER_DATA',
    marker: marker
  };
}

/* users*/
function userRolesData() {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.usersData().then(function (post) {
      var categories = post.DATA;
      dispatch(fetchUserSuccess({ categories: categories }));
      dispatch(loadInProgress(false));
    });
  };
}

/* Create BCP Action*/
function createBcpData(post) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.createBcp(post).then(function (post) {
      var categories = post.data.DATA.recordUpdate;
      var bcpIncidentId = post.data.DATA.bcpIncidentId;
      dispatch(createdBCPSuccess(categories, bcpIncidentId));
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };
}

/* Status Update on Close*/
function updateStatus(id) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.updateStatusClose(id).then(function (id) {
      var status = id.data.DATA.bcpstatus;
      if (status === "CLOSED") {
        dispatch((0, _reactRouterRedux.push)("/list"));
      }
    });
  };
}

/* Create BCP System Action*/
function dropdownFetchData() {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.systemSnapshotData().then(function (data) {
      var categories = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(fetchDropDownSuccess({ categories: categories }));
    });
  };
}

/* Create BCP preincident*/
function preIncidentFetchData(both) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.preincidentData(both).then(function (data) {
      var categories = data.data.DATA.snapShotList;
      dispatch(loadInProgress(false));
      dispatch(fetchPreincidentSuccess({ categories: categories }));
    });
  };
}

/* Create BCP Online Devices*/
function onlineDevicesFetchData(dsid, sid) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.onlineDevicesData(dsid, sid).then(function (data) {
      dispatch(loadInProgress(false));
      dispatch(fetchOnlineDeviceSuccess(data.data.DATA));
    });
  };
}

/* BCPList Action*/
function listFetchData() {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.bcpListData().then(function (data) {
      var categories = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(fetchCategorySuccess({ categories: categories }));
    });
  };
}

/* 2hrs SnapShot Action in Detail View */
function snapShotHourlyMethod(id) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.snapshotHourlyData(id).then(function (data) {
      var snapShotData = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(snapShotHourlyAction({ snapShotData: snapShotData }));
    });
  };
}

/* BCP Header Action*/
function bcpDetailEditMethod(id) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.bcpDetailEditApi(id).then(function (data) {
      var bcpEditabData = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(bcpDetailEditAction({ bcpEditabData: bcpEditabData }));
    });
  };
}

/* BCP Header Save Action*/
function updateBcpDataMethod(postdata) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.updateBcp(postdata).then(function (post) {
      console.log(post);
      var categories = post.data;
      dispatch(updateBCPSuccess(categories));
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };
}

/* save comments of header comment  view */
function saveBCPSummaryComments(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPSuccess(true));
    });
  };
}

/* save comments of impact view */
function saveBCPImapctSummaryComments(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPImapactSuccess(true));
    });
  };
}

/* save comments of outage view */
function saveBCPOutageSummaryComments(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPOutageSuccess(true));
    });
  };
}

/* save impact fiber section comments */
function saveImpactFIberCommentsData(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPImpactFiberSuccess(true));
    });
  };
}

/* save comments of commercialP view */
function saveBcpCommercialPSummaryData(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPCommercialSuccess(true));
    });
  };
}

/* save comments of FieldS view */
function saveBcpFieldSSummaryData(postdata) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveBCPFieldSSuccess(true));
    });
  };
}

/* save comments of Commercial Power Utility */
function saveBcpCommercialPUtilityData(postdata, count) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(postdata).then(function (post) {
      dispatch(saveCommercialUtilitySuccess(true, count));
    });
  };
}

/* Save power supply */
function powerSupplyMethod(data, id) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(data).then(function (post) {
      dispatch(savePowerSupply(true));
      dispatch(bcpSummaryDataMethod(id));
    });
  };
}

/* Save headend Facility */
function saveHeadendFacilityData(data) {
  return function (dispatch) {
    ReadableAPI.saveBCPComments(data).then(function (post) {
      dispatch(saveHeadendFacility(true));
    });
  };
}

/* Summary View Data */
function bcpSummaryDataMethod(id) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.SummaryFetchData(id).then(function (data) {
      var summaryFetchDatas = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(bcpSummaryFetch({ summaryFetchDatas: summaryFetchDatas }));
    });
  };
}

/* UAA Authenciation User info */
// export function userInfoMethod(data){
//   return (dispatch) => {
//     dispatch(loadInProgress(true));
//     ReadableAPI.UserInfo(data).then(data => {
//       var userInfo = data;
//       dispatch(loadInProgress(false));
//       dispatch(userCredentialDetails({userInfo}))
//     });
//   };   
// }

/* Impact Data */
function bcpImpactDataMethod(snapShotId, systemId, subSystemId) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.ImpactFetchData(snapShotId, systemId, subSystemId).then(function (data) {
      var ImpactFetchDatas = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(ImpactFetchAction({ ImpactFetchDatas: ImpactFetchDatas }));
    });
  };
}

/* Manual Snapshot */
function manualSnapshotMethod(manual) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.ManualSnapshotUpdate(manual).then(function (data) {
      var record = data.data.DATA.recordInsertUpdateStatus;
      dispatch(loadInProgress(false));
      dispatch(IncludeManualSnapshot(record));
    });
  };
}

/* Bcp Customer details for impact*/
function impactDataViewMethod(reqOnline, bcp) {
  return function (dispatch) {
    var sysId = reqOnline.systemid;
    var snapId = reqOnline.dailysnapshotid;
    var hname = reqOnline.headendname;
    var node = reqOnline.node;
    var type = reqOnline.type;
    dispatch(loadInProgress(true));
    dispatch(impactDataViewAction(bcp));
    window.open('/bcp_impact_View/' + sysId + '/' + snapId + '/' + hname + '/' + node + '/' + type);
  };
}

/* Admin update headend */
function updateHeadendData(data) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.UpdateHeadend(data).then(function (data) {
      var status = data.data.DATA.message;
      if (status === "RECORD UPDATED") {
        dispatch(getAdminData());
      }
    });
  };
}

/* get Admin data*/
function getAdminData() {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.AdminData().then(function (data) {
      var record = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(getAdminDetails({ record: record }));
    });
  };
}

/* Admin delete subsystem*/
function deleteAdminSubsystem(data) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.DeleteSubsystem(data).then(function (data) {
      var status = data.data.DATA.message;
      if (status === "Subsystem deleted") {
        dispatch(getAdminData());
      }
    });
  };
}

/* get Detail View Map data*/
function getDetailViewMapData(id, sid) {
  return function (dispatch) {
    ReadableAPI.DetailViewMapData(id, sid).then(function (data) {
      var fetchedData = data.data.DATA;
      dispatch(fetchDetailViewMapSuccess({ fetchedData: fetchedData }));
    });
  };
}

/* Sending Email */
function bcpSendEmailMethod(reqjs) {
  return function (dispatch) {
    ReadableAPI.bcpSendEmailApi(reqjs).then(function (data) {
      var mailRes = data;
      //dispatch(bcpSendEmailSuccess(true))

      if (mailRes === "MAIL SENT") {
        dispatch(bcpSendEmailSuccess(true));
      } else {
        dispatch(bcpSendEmailSuccess(false));
      }
    });
  };
}

/* Marker for map*/
function getMarkerMethod(id) {
  return function (dispatch) {
    ReadableAPI.getMarkerApi(id).then(function (data) {
      var marker = data.data.DATA;
      dispatch(fetchMarkerMap({ marker: marker }));
    });
  };
}

function getimpactOfflineAllData(record) {
  return {
    type: 'IMPACT_OFFLINE_DATA',
    record: record
  };
}
function getimpactOfflineWithData(record) {
  return {
    type: 'IMPACT_OFFLINE_WITH_DATA',
    record: record
  };
}
function impactOffAllMethod(snapId) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOfflineAllData(snapId).then(function (data) {
      var record = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(getimpactOfflineAllData({ record: record }));
    });
    ReadableAPI.impactOfflineWithData(snapId).then(function (data) {
      var record = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(getimpactOfflineWithData({ record: record }));
    });
  };
}

function getImpOffDetaiData(record) {
  return {
    type: 'IMPACT_OFFLINE_DETAILS_VIEW',
    record: record
  };
}
function getImpOffWithDetaiData(record) {
  return {
    type: 'IMPACT_OFFLINE_DETAILS_WITH_DATA',
    record: record
  };
}
function impactOffViewDataMethod(reqOnline) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOffViewAllData(reqOnline.dailysnapshotid, reqOnline.node).then(function (data) {

      var record = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(getImpOffDetaiData({ record: record }));
    });
  };
}

function impactOffWithViewDataMethod(reqOnline) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOffWithViewDataMethod(reqOnline.dailysnapshotid, reqOnline.node).then(function (data) {
      var record = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(getImpOffWithDetaiData({ record: record }));
    });
  };
}

function ImpactOnlineMethod(reqOnline) {
  return function (dispatch) {

    dispatch(loadInProgress(true));
    ReadableAPI.impactOnline(reqOnline).then(function (data) {
      var record = data.data.DATA;

      dispatch(loadInProgress(false));
      dispatch(impactOnlineViewAction(record));
    });
  };
}

function impactOnlineViewAction(record) {
  return {
    type: "IMPACT_DETAIL_VIEW",
    record: record
  };
}

//delete Bcp table data
function deleteBcpData(msg) {
  return {
    type: "DELETE_SUCCESS_MESSAGE",
    msg: msg
  };
}

function deleteBcpTableDataMethod(id) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.deleteBcpId(id).then(function (data) {
      var result = data.data.DATA;
      if (result.message === "BCP Incident is deleted") {
        var msg = "success";
        dispatch(deleteBcpData(msg));
      }
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };
}

/*Configuraion update*/
function configData(period, frequency) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.configInterval(period, frequency).then(function (data) {
      var result = data.data.DATA;
      dispatch(saveConfigSuccess(true));
      dispatch(loadInProgress(false));
    });
  };
}

//Config update
function saveConfigSuccess(bool) {
  return {
    type: "SAVE_CONFIG_SUCCESS"
  };
}

/* Add Headend*/
function addHeadendMethod(data) {
  return function (dispatch) {
    dispatch(loadInProgress(true));
    ReadableAPI.addHeadend(data).then(function (data) {
      var status = data.data.DATA.message;
      if (status === "HEADEND SAVED") {
        dispatch(getAdminData());
      } else if (status === "HEADEND ALREADY EXIST") {
        dispatch(duplicateHeadend(true));
      }
    });
  };
}
/*DuplicateHeaded*/
function duplicateHeadend(bool) {
  return {
    type: "DUPLICATE_HEADEND"
  };
}