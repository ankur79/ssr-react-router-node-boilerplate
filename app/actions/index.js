import * as ReadableAPI from '../utils/ReadableAPI';
import { push } from 'react-router-redux';

export function apiLoadError(bool) {
  return {
      type: 'LOAD_ERROR',
      loadErrored: bool
  };
}

export function loadInProgress(bool) {
  return {
      type: 'LOAD_INPROGRESS',
      isLoading: bool
  };
}

export function fetchCategorySuccess ({categories}){
  return {
    type: 'FETCH_BCPLIST_SUCCESS',
    categories
  }
}

export function fetchDropDownSuccess ({categories}){
  return {
    type: 'FETCH_DROPDOWN_SUCCESS',
    categories
  }
}

export function fetchPreincidentSuccess ({categories}){
  return {
    type: 'FETCH_PREINCIDENT_SUCCESS',
    categories
  }
}

export function fetchOnlineDeviceSuccess (data){
  return {
    type: 'FETCH_ONLINEDEVICE_SUCCESS',
    data
  }
}

export function createdBCPSuccess (categories, bcpIncidentId){
  return {
    type: 'CREATED_BCP_SUCCESS',
    categories,
    bcpIncidentId
  }
}


export function snapShotHourlyAction(snapShotData){
  return {
    type: 'SNAPSHOT_Hourly',
    snapShotData
  }
}

export function bcpDetailEditAction(bcpEditabData){
  return {
    type: 'BCP_EDITABLE_DATA',
    bcpEditabData
  }
}

export function updateBCPSuccess (categories){
  return {
    type: 'UPDATED_BCP_SUCCESS',
    categories
  }
}

export function systemDropdown(data){
  return {
    type: 'SYSTEM_DROPDOWN',
    data
  }
}

export function fetchUserSuccess ({categories}){
  return {
    type: 'FETCH_USER_SUCCESS',
    categories
  }
}

export function saveBCPSuccess (bool){
  return {
    type: 'SAVE_BCP_SUMMARY_SUCCESS',
    saved:bool
  }
}

export function alertMsg () {
  return {
    type: 'ALERT_MSG'
  }
}

export function saveBCPImapactSuccess(bool){
  return{
    type:'SAVE_IMPACT_SUMMARY_COMMENTS',
    saved:bool
  }
}

export function impactAlertMsg(){
  return{
    type:'IMPACT_ALERT_MSG'
  }
}

export function saveBCPOutageSuccess(){
  return{
    type:'SAVE_OUTAGE_COMMENTS'
  }
}

export function saveBCPImpactFiberSuccess(){
  return{
    type:'SAVE_IMPACT_FIBER_COMMENTS'
  }
}

export function outageAlertMsg(){
  return{
    type:'OUTAGE_ALERT_MSG'
  }
}


export function CommercialPAlertMsg(){
  return{
    type:"COMMERCIAL_ALERT_MSG"
  }
}

export function saveBCPCommercialSuccess(bool){
  return{
    type:"SAVE_COMMERCIALP_COMMENTS",
    saved:bool
  }
}

export function saveBCPFieldSSuccess(bool){
  return{
    type:"SAVE_FIELDS_COMMENTS",
    saved:bool
  }
}

export function saveCommercialUtilitySuccess(bool, count){
  return{
    type:"SAVE_COMMERCIALP_UTILITY",
    saved:bool,
    count
  }
}

export function savePowerSupply(bool) {
  return {
    type: "SAVE_POWER_SUPPLY"
  }
}

export function saveHeadendFacility(bool) {
  return {
    type: "SAVE_HEADEND_FACILITY"
  }
}

export function FieldSAlertMsg(){
  return{
    type:"FIELDS_ALERT_MSG"
  }
}

export function bcpSummaryFetch ({summaryFetchDatas}){
  return {
    type: 'FETCH_SUMMARY_SUCCESS',
    summaryFetchDatas
  }
}

// export function userCredentialDetails ({userInfo}){
//   return {
//     type: 'CREDENTIAL_DETAILS',
//     userInfo
//   }
// }

export function ImpactFetchAction ({ImpactFetchDatas}){
  return {
    type: 'FETCH_IMPACT_SUCCESS',
    ImpactFetchDatas
  }
}
export function IncludeManualSnapshot(record){
  return{
    type:"INCLUDE_MANUAL_SNAPSHOT",
    record
  }
}

export function impactDataViewAction(bcpId){
  return{
    type:"IMPACT_VIEW_INFO",
    bcpId
  }
}

export function handleChangeUtilityMethod(count){
  return {
    type: "CHANGE_UTILITY_CUSTOMER",
    count
  }
}

export function getAdminDetails({record}){
  return {
    type: "GET_ADMIN_DETAILS",
    record
  }  
}

export function updateSubsystemMethod(subsystem, id) {
  return {
    type:"UPDATE_SUBSYSTEM",
    subsystem,
    id
  }
}

export function deleteSubsystem(bool) {
  return {
    type: "DELETE_SUBSYSTEM"
  }
}

//action for fetching detail view's map data:
export function fetchDetailViewMapSuccess ({fetchedData}){
  return {
    type: 'FETCH_DETAIL_VIEW_MAP',
    fetchedData
  }
}

export function bcpSendEmailSuccess(mailRes){
  return {
    type: 'RESPONSE_EMAIL',
    mailRes
  }
} 

export function fetchMarkerMap({marker}){
	return {
		type:'FETCH_MARKER_DATA',
		marker
	}
}

/* users*/
export function userRolesData(){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.usersData().then(post => {
      var categories = post.DATA;
      dispatch(fetchUserSuccess({categories}));
      dispatch(loadInProgress(false));
    });
  };  
}

/* Create BCP Action*/
export function createBcpData(post){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.createBcp(post).then(post => {
      var categories = post.data.DATA.recordUpdate;
      var bcpIncidentId = post.data.DATA.bcpIncidentId;
      dispatch(createdBCPSuccess(categories, bcpIncidentId));
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };  
}

/* Status Update on Close*/
export function updateStatus(id) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.updateStatusClose(id).then(id => {
      var status = id.data.DATA.bcpstatus;
      if(status === "CLOSED") {
        dispatch(push("/list"))
      }
    });
  }
}

/* Create BCP System Action*/
export function dropdownFetchData() {
  return (dispatch) => {
      dispatch(loadInProgress(true));
      ReadableAPI.systemSnapshotData().then(data => {
        var categories = data.DATA;
        dispatch(loadInProgress(false));
        dispatch(fetchDropDownSuccess({categories}))
      });
  };
}

/* Create BCP preincident*/
export function preIncidentFetchData(both) {
  return (dispatch) => {
      dispatch(loadInProgress(true));
      ReadableAPI.preincidentData(both).then(data => {
        var categories = data.data.DATA.snapShotList;
        dispatch(loadInProgress(false));
        dispatch(fetchPreincidentSuccess({categories}))
      });
  };
}

/* Create BCP Online Devices*/
export function onlineDevicesFetchData(dsid, sid) {
  return (dispatch) => {
      dispatch(loadInProgress(true));
      ReadableAPI.onlineDevicesData(dsid, sid).then(data => {
        dispatch(loadInProgress(false));
        dispatch(fetchOnlineDeviceSuccess(data.data.DATA))
      });
  };
}

/* BCPList Action*/
export function listFetchData() {
  return (dispatch) => {
      dispatch(loadInProgress(true));
      ReadableAPI.bcpListData().then(data => {
        var categories = data.DATA;
        dispatch(loadInProgress(false));
        dispatch(fetchCategorySuccess({categories}))
      });
  };
}

/* 2hrs SnapShot Action in Detail View */
export function snapShotHourlyMethod(id){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.snapshotHourlyData(id).then(data => {
      var snapShotData = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(snapShotHourlyAction({snapShotData}))
    });
  };
}

/* BCP Header Action*/
export function bcpDetailEditMethod(id){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.bcpDetailEditApi(id).then(data => {
      var bcpEditabData = data.DATA;
      dispatch(loadInProgress(false));
      dispatch(bcpDetailEditAction({bcpEditabData}))
    });
  };
}

/* BCP Header Save Action*/
export function updateBcpDataMethod(postdata){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.updateBcp(postdata).then(post => {
      console.log(post)
      var categories = post.data;
      dispatch(updateBCPSuccess(categories));
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };  
}

/* save comments of header comment  view */
export function saveBCPSummaryComments(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPSuccess(true))
    });
  };  
} 

/* save comments of impact view */
export function saveBCPImapctSummaryComments(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPImapactSuccess(true))
    });
  };  
}

/* save comments of outage view */
export function saveBCPOutageSummaryComments(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPOutageSuccess(true))
    });
  };  
}

/* save impact fiber section comments */
export function saveImpactFIberCommentsData(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPImpactFiberSuccess(true))
    });
  };
}

/* save comments of commercialP view */
export function saveBcpCommercialPSummaryData(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPCommercialSuccess(true))
    });
  };  
}

/* save comments of FieldS view */
export function saveBcpFieldSSummaryData(postdata){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveBCPFieldSSuccess(true))
    });
  };  
}

/* save comments of Commercial Power Utility */
export function saveBcpCommercialPUtilityData(postdata,count){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(postdata).then(post => {
      dispatch(saveCommercialUtilitySuccess(true,count))
    });
  };  
}

/* Save power supply */
export function powerSupplyMethod(data, id){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(data).then(post => {
      dispatch(savePowerSupply(true))
      dispatch(bcpSummaryDataMethod(id))
    });
  }; 
}

/* Save headend Facility */
export function saveHeadendFacilityData(data){
  return (dispatch) => {
    ReadableAPI.saveBCPComments(data).then(post => {
      dispatch(saveHeadendFacility(true))
    });
  }; 
}

/* Summary View Data */
export function bcpSummaryDataMethod(id){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.SummaryFetchData(id).then(data => {
      var summaryFetchDatas = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(bcpSummaryFetch({summaryFetchDatas}))
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
export function bcpImpactDataMethod(snapShotId,systemId,subSystemId){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.ImpactFetchData(snapShotId,systemId,subSystemId).then(data => {
      var ImpactFetchDatas = data.data.DATA;
      dispatch(loadInProgress(false));
      dispatch(ImpactFetchAction({ImpactFetchDatas}))
    });
  };   
}

/* Manual Snapshot */
export function manualSnapshotMethod(manual) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.ManualSnapshotUpdate(manual).then(data => {
      var record = data.data.DATA.recordInsertUpdateStatus;
      dispatch(loadInProgress(false));
      dispatch(IncludeManualSnapshot(record))
    });    
  }
}

/* Bcp Customer details for impact*/
export function impactDataViewMethod(reqOnline,bcp) {  
  return (dispatch) => {
  let sysId=reqOnline.systemid;
  let snapId=reqOnline.dailysnapshotid;
  let hname=reqOnline.headendname;
  let node=reqOnline.node;
  let type=reqOnline.type
  dispatch(loadInProgress(true));
  dispatch(impactDataViewAction(bcp));
  window.open((`/bcp_impact_View/${sysId}/${snapId}/${hname}/${node}/${type}`));
  }
  }  

/* Admin update headend */
export function updateHeadendData(data) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.UpdateHeadend(data).then(data => {
      var status = data.data.DATA.message
      if(status === "RECORD UPDATED") {
        dispatch(getAdminData())
      }
    });    
  }
}

/* get Admin data*/
export function getAdminData() {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.AdminData().then(data => {
      var record = data.data.DATA
      dispatch(loadInProgress(false));
      dispatch(getAdminDetails({record}))
    });     
  }
}

/* Admin delete subsystem*/
export function deleteAdminSubsystem(data) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.DeleteSubsystem(data).then(data => {
      var status = data.data.DATA.message;
      if(status === "Subsystem deleted") {
        dispatch(getAdminData())
      }
    });     
  }
}

/* get Detail View Map data*/
export function getDetailViewMapData(id, sid) {
  return (dispatch) => {
    ReadableAPI.DetailViewMapData(id, sid).then(data => {
      var fetchedData = data.data.DATA;
      dispatch(fetchDetailViewMapSuccess({fetchedData}))
    });     
  }
}

/* Sending Email */
export function bcpSendEmailMethod(reqjs){
  return (dispatch) => {
    ReadableAPI.bcpSendEmailApi(reqjs).then(data => {
      var mailRes = data;
      //dispatch(bcpSendEmailSuccess(true))

       if(mailRes === "MAIL SENT") {
         dispatch(bcpSendEmailSuccess(true))
       } else {
         dispatch(bcpSendEmailSuccess(false))
       }
    }); 
  }
} 

/* Marker for map*/
export function getMarkerMethod(id) {
  return(dispatch) =>{
    ReadableAPI.getMarkerApi(id).then(data => {
      var marker = data.data.DATA;
      dispatch(fetchMarkerMap({marker}))
    }); 
  }
}

export function getimpactOfflineAllData(record){
  return{
    type:'IMPACT_OFFLINE_DATA',
    record
  }
}
export function getimpactOfflineWithData(record){
  return{
    type:'IMPACT_OFFLINE_WITH_DATA',
    record
  }
}
export function impactOffAllMethod(snapId) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOfflineAllData(snapId).then(data => {
      var record = data.data.DATA
      dispatch(loadInProgress(false));
      dispatch(getimpactOfflineAllData({record}))
    });   
    ReadableAPI.impactOfflineWithData(snapId).then(data => {
      var record = data.data.DATA
      dispatch(loadInProgress(false));
      dispatch(getimpactOfflineWithData({record}))
    });    
  }
}

export function getImpOffDetaiData(record){
  return{
    type:'IMPACT_OFFLINE_DETAILS_VIEW',
    record
  }
}
export function getImpOffWithDetaiData(record){
  return{
    type:'IMPACT_OFFLINE_DETAILS_WITH_DATA',
    record
  }
}
export function impactOffViewDataMethod(reqOnline) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOffViewAllData(reqOnline.dailysnapshotid,reqOnline.node).then(data => {
      
      var record = data.data.DATA
      dispatch(loadInProgress(false));
      dispatch(getImpOffDetaiData({record}))
    });   
    
  }
}

export function impactOffWithViewDataMethod(reqOnline) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.impactOffWithViewDataMethod(reqOnline.dailysnapshotid,reqOnline.node).then(data => {
      var record = data.data.DATA
      dispatch(loadInProgress(false));
      dispatch(getImpOffWithDetaiData({record}))
    });   
    
  }
}


export function ImpactOnlineMethod(reqOnline) {
  return (dispatch) => {
    
    dispatch(loadInProgress(true));
    ReadableAPI.impactOnline(reqOnline).then(data => {
      var record = data.data.DATA
      
      dispatch(loadInProgress(false));
      dispatch(impactOnlineViewAction(record));
    
    });  
  }
} 

export function impactOnlineViewAction(record){
  return{
  type:"IMPACT_DETAIL_VIEW",
  record
  }
}

//delete Bcp table data
export function deleteBcpData(msg){
  return{
  type:"DELETE_SUCCESS_MESSAGE",
  msg
  }
} 
  
export function deleteBcpTableDataMethod(id){
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.deleteBcpId(id).then(data => {
      var result = data.data.DATA;
      if(result.message==="BCP Incident is deleted"){
        var msg="success";
         dispatch(deleteBcpData(msg))
      }
      dispatch(loadInProgress(false));
      dispatch(listFetchData());
    });
  };  
}

/*Configuraion update*/
export function configData(period, frequency) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.configInterval(period, frequency).then(data => {
      var result = data.data.DATA;
      dispatch(saveConfigSuccess(true))
      dispatch(loadInProgress(false));
    });
  };   
}

//Config update
export function saveConfigSuccess(bool){
  return{
  type:"SAVE_CONFIG_SUCCESS"
  }
}

/* Add Headend*/
export function addHeadendMethod(data) {
  return (dispatch) => {
    dispatch(loadInProgress(true));
    ReadableAPI.addHeadend(data).then(data => {
      var status = data.data.DATA.message;
      if(status === "HEADEND SAVED") {
        dispatch(getAdminData())
      } else if(status === "HEADEND ALREADY EXIST") {
        dispatch(duplicateHeadend(true))
      }
    });
  };   
}
/*DuplicateHeaded*/
export function duplicateHeadend(bool){
  return{
  type:"DUPLICATE_HEADEND"
  }
}