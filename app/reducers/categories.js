import React from 'react';

const initialOrderState = {
  listData:[],
  dups: '',
  system: [],
  subsystem: [],
  devices: '',
  bcpEditData: [],
  snapshotid:[],
  dropdown:[],
  userRoles: [],
  snapShotHourlyData:[],
  bcpUpdateMsg:"",
  latestData: '',
  bcpIncidentId: '',
  defaultSnapshotDailyOption: {},
  commentUpdated:false,
  commentUpdatedImpact:false,
  commentUpdatedOutage:false,
  commentUpdateField:false,
  commentUpdateCommercialP: false,
  commercialUtilityFlag:false,
  impactFiberCommentUpdated:false,
  bcpSummaryData:[],
  impact: -1,
  outage: -1,
  power: -1,
  field: -1,
  comment: -1,
  powerFiber:-1,
  headfacility:-1,
  loadingDetailView:true,
  systemSelected:'',
  userEmail:'',
  userInfo:'',
  bcpImpactData:[],
  manual: 0,
  impactDataOff:[],
  impactDataOffOut:[], 
  impactViewDa:{},
  commercialUtility:-1,
  cwpCount:0,
  timeStamp: '',
  powerSupply:false,
  headendFacility: false,
  adminData: [],
  mapBoundaryData: [],
  fea: [],
  Emailmsg: false,
  unique: false,
  pow: 0,
  marker: [],
  onlineImpactDetails:[],
  impactOffDatas:[],
  impactOffDatasWithOut:[],   
  markerArr: [],
  alertDelete: '',
  configInterval: false,
  duplicateHeadend: false
}

function categories (state = initialOrderState, action) {
  switch (action.type) {
    case "CREATED_BCP_SUCCESS" :
      return {...state, dups:action.categories, bcpIncidentId: action.bcpIncidentId, devices:'' } 
    case "FETCH_BCPLIST_SUCCESS" :
      var bcp = []; 
	  if(action.categories !== undefined) {
      if(action.categories.length > 0) { bcp = action.categories[0].bcpincidentid;} }
      return {...state, listData: action.categories, latestData: bcp}
    case "FETCH_USER_SUCCESS" :
      let users = action.categories; 
      let user = [];
	  if( users !== undefined) {
      if( users.length > 0) {
        users.map((item) =>{
          let roles = {label:'', value:''};
          roles["label"] = item.username; roles["value"] = item.username; 
          user.push(roles)       
        }); }}
      return {...state, userRoles: user,  bcpUpdateMsg:"", commentUpdated:false, commentUpdatedImpact:false,
      commentUpdatedOutage:false, commentUpdateField:false, commentUpdateCommercialP: false, commercialUtilityFlag:false, powerSupply: false, 
      headendFacility: false, unique: false, manual:0, loadingDetailView:true}
    case "FETCH_DROPDOWN_SUCCESS" :
      let arr = action.categories; 
      let sys = [];
	  if( arr !== undefined) {
      if(arr.systemSubsystemList.length > 0) {
        arr.systemSubsystemList.map((item) =>{
          let system = {label:'', value:''};
          system["label"] = item.System; system["value"] = item.systemid; 
          sys.push(system)       
        }); } }
      return {...state, system: sys, dropdown:action.categories}
    case "SYSTEM_DROPDOWN" :
      let arr1 = state.dropdown.systemSubsystemList;
      let subsys = [];  
	  if( arr1 !== undefined){
      if(arr1.length > 0) { 
        arr1.map((item) => {
          if(action.data === item.systemid) {
            item.SubSystems.map((d) => {
              let snap = {label:'', value:''};
              snap["label"] = d.subsystemname; snap["value"] = d.subsystemid; 
              subsys.push(snap);  
            });
            if(subsys[0].label === "" && subsys[0].value === "" ) { subsys = [];} }
        }); } }
      return {...state, subsystem: subsys, dups:'', snapshotid:[]}
    case "FETCH_PREINCIDENT_SUCCESS" :
      let arr2 = action.categories;
      let snapShot = [];
	  if(arr2 !== undefined) {
      if(arr2.length > 0) { 
        arr2.map((d) => {
            let snap = {label:'', value:''};
            snap["label"] = d.snapshotname; snap["value"] = d.snapshotid;
            //`${d.snapshotname} | Online: ${d.onlinedevicesCount}`; snap["value"] = d.snapshotid; 
            snapShot.push(snap);  
        }); } }
      return {...state, snapshotid:snapShot}
    case "SNAPSHOT_Hourly":
      let arr3 = action.snapShotData.snapShotData.systemSubsystemTwoHourList;
      let snapIdHour = [];
	  if(arr3 !== undefined) {
      if(arr3.length > 0)  {
        arr3.map((item) => {
          var snap = {label:'', value:''};
          if(item.isManual === 'Y') {
            snap["label"] = `${item.twohrSnapshotName} Manual`;
            snap["value"] = item.twohrSnapshotId; } else {
              snap["label"] = item.twohrSnapshotName;
              snap["value"] = item.twohrSnapshotId;              
            }
          snapIdHour.push(snap)
        }); } }
      let def = [];
      if(snapIdHour.length > 0){def = snapIdHour[0]} else{def=[]};
      return {...state,snapShotHourlyData:snapIdHour, defaultSnapshotDailyOption: def, 
        dups:'',bcpIncidentId: '', bcpUpdateMsg:"", commentUpdated:false, commentUpdatedImpact:false,
        commentUpdatedOutage:false, commentUpdateField:false, commentUpdateCommercialP: false, 
        commercialUtilityFlag:false, powerSupply:false, headendFacility: false, manual:0, loadingDetailView:true}
    case "BCP_EDITABLE_DATA":
      return {...state,bcpEditData:action.bcpEditabData.bcpEditabData, bcpUpdateMsg:"", commentUpdated:false, commentUpdatedImpact:false,
      commentUpdatedOutage:false, commentUpdateField:false, commentUpdateCommercialP: false, 
      systemSelected:action.bcpEditabData.bcpEditabData.systemName, commercialUtilityFlag:false, 
      powerSupply:false, headendFacility: false, unique: false, manual:0, loadingDetailView:true}
    case "UPDATED_BCP_SUCCESS":
      return {...state,bcpUpdateMsg:action.categories}
    case "FETCH_ONLINEDEVICE_SUCCESS":
      return {...state, devices: action.data}
    case "SAVE_BCP_SUMMARY_SUCCESS":
      return {...state,commentUpdated:true} 
      case "ALERT_MSG":
      return {...state, commentUpdated:false}
    case "SAVE_IMPACT_SUMMARY_COMMENTS":
      return {...state,commentUpdatedImpact:true}
    case "IMPACT_ALERT_MSG":
      return {...state,commentUpdatedImpact:false}
    case "SAVE_OUTAGE_COMMENTS":
      return {...state,commentUpdatedOutage:true}
    case "OUTAGE_ALERT_MSG":
      return {...state,commentUpdatedOutage:false}
    case "SAVE_COMMERCIALP_COMMENTS":
      return {...state,commentUpdateCommercialP:true}
    case "COMMERCIAL_ALERT_MSG":
      return {...state,commentUpdateCommercialP:false}
    case "SAVE_FIELDS_COMMENTS":
      return {...state,commentUpdateField:true}
    case "FIELDS_ALERT_MSG":
      return {...state,commentUpdateField:false}
    case "SAVE_COMMERCIALP_UTILITY":
      return {...state,commercialUtilityFlag:true,cwpCount:action.count}
    case "SAVE_IMPACT_FIBER_COMMENTS":
        return {...state,impactFiberCommentUpdated:false}
    case 'FETCH_SUMMARY_SUCCESS':
      let impDataOff, impDataOfOut=[];
      let arr4 = action.summaryFetchDatas.snapshotsummaryList;
      arr4.map((item)=>item.sectionvalue=JSON.parse(item.sectionvalue))
      var ms = arr4.map(function(e) { return e.sectiontype; }).indexOf('IMPACT_SUMMARY');
      var fi = arr4.map(function(e) { return e.sectiontype; }).indexOf('IMPACT_SUMMARY_FIBER');
      var os = arr4.map(function(e) { return e.sectiontype; }).indexOf('OUTAGE_SUMMARY');
      var ps = arr4.map(function(e) { return e.sectiontype; }).indexOf('POWER_SUMMARY');
      var fss = arr4.map(function(e) { return e.sectiontype; }).indexOf('FIELD_SERVICE_SUMMARY');
      var hfs = arr4.map(function(e) { return e.sectiontype; }).indexOf('FACILITY_ALARM_SUMMARY');
      var c = arr4.map(function(e) { return e.sectiontype; }).indexOf('COMMENTS');
      var impDaOff= arr4.map(function(e) { return e.sectiontype; }).indexOf('IMPACTED_DATA_OFF');
      var imDaOffWithOut = arr4.map(function(e) { return e.sectiontype; }).indexOf('IMPACTED_DATA_OFF_WITH_OUTAGES');
      var cpu = arr4.map(function(e) { return e.sectiontype; }).indexOf('POWER_SUMMARY_BY_UTILITY');
      console.log(arr4);
      let result = 0;
      if(cpu !== -1) {
        // var utility = [];
        // arr4[cpu].sectionvalue.map((d) => { if(d.cwp>=0 || d.cwp==="" ||d.cwp===null ) { utility.push(d.cwp);}})
        // if(utility.length > 0) {
        //   result = utility.reduce((data, val) => data + val); } else {
        //   result = 0;
        // }
        const res = arr4[cpu].sectionvalue.map((accumulator) => accumulator.cwp);
        result = res.reduce((data, val) => data + val); } else {
        result = 0;        
      }
      if(arr4[impDaOff].sectionvalue !== null) {
      if(impDaOff !== -1 ){ impDataOff=arr4[impDaOff].sectionvalue;  } } else { impDaOff= -1;}
      if(imDaOffWithOut !== -1){ impDataOfOut=arr4[imDaOffWithOut].sectionvalue; } 

      return {...state, bcpSummaryData:arr4, impact:ms, outage:os, power:ps, field:fss, commercialUtility:cpu,powerFiber:fi,
        comment: c,headfacility:hfs, commentUpdated:false, commentUpdatedImpact:false,
        commentUpdatedOutage:false, commentUpdateField:false, commentUpdateCommercialP: false, 
        commercialUtilityFlag:false, powerSupply:false, headendFacility: false, unique: false, 
        timeStamp: action.summaryFetchDatas.timestamp, cwpCount: result, manual: 0, loadingDetailView:false}
    // case "CREDENTIAL_DETAILS":
    //   return {...state,userEmail:action.userInfo.email, userInfo: action.userInfo}    
    case "INCLUDE_MANUAL_SNAPSHOT":
      let snapShotM = 0;
      if(action.record === "RECORD SAVED") { snapShotM = 1;}
      return {...state, manual: snapShotM}   
    case "IMPACT_VIEW_INFO":
      localStorage.setItem("bcpIncidentId", action.bcpId);
      return {...state,powerSupply:false, headendFacility: false, manual:0}   
    case "SAVE_POWER_SUPPLY":
      return {...state, powerSupply:true, pow: 1}   
    case "SAVE_HEADEND_FACILITY":   
    return {...state, headendFacility:true}
    case "CHANGE_UTILITY_CUSTOMER":
      return {...state, cwpCount: action.count}   
    case "GET_ADMIN_DETAILS":
      return {...state, adminData: action.record, configInterval: false, duplicateHeadend: false}
    case "UPDATE_SUBSYSTEM":
      var subsystem = state.adminData.map((e) =>{ 
        if(e.systemId === action.id) { 
          var subsys = e.adminsubsystemlist.map((d) => { return d.subsystemId; }).indexOf(action.subsystem);
          if(subsys === -1) { e.adminsubsystemlist.push({"subsystemId": action.subsystem}); }
          var headendList = e.adminheadendlist.filter((d) => {return d.adminsubsystemName === ""; });
          e.adminheadendlist = headendList;
        }
        return e;
      });     
      return {...state,adminData: subsystem}
    case "DELETE_SUBSYSTEM":
      return {...state}
    case "FETCH_DETAIL_VIEW_MAP":
      let formattedData = [];
      let objToPlot = {
      "type":"FeatureCollection",
      "features":''
      } 
	  if( action.fetchedData !== undefined) {
		  action.fetchedData.map((item,i)=>{
			let val = parseInt(item.perImpact);
			let col = '';
			if (val <= 2) { col = "#ff0000"; }
			else if (val <= 40) { col = "#ff9830"; }
			else if (val <= 70) { col = "#ffff00"; }
			else if (val <= 90) { col = "#a0ffa0"; }
			else { col = "#008000"; }        
		  var obj = {
			"type": "Feature",
			"id":"gisYYcox_fiber_node_boundaryYY"+item.myw_smallworld_id,
			"myw":{"feature_type": "cox_fiber_node_boundary"},
			"properties": {
			"name":item.node_num,
			"cox_site_code":item.cox_site_code,
			"id":"gisYYcox_fiber_node_boundaryYY"+item.myw_smallworld_id,
			"perImpact":item.perImpact,
			"fillcolor": col
			},        
			"geometry": {
			"type": "Polygon",
			"coordinates": JSON.parse(item.geogson)
			}
		  };
		  formattedData.push(obj);
		  });
		}
      objToPlot["features"] = formattedData;  
      return {...state,mapBoundaryData:objToPlot, fea:objToPlot.features, unique:true} 
    case "RESPONSE_EMAIL":
      return {...state,Emailmsg:action.mailRes}
    case "FETCH_MARKER_DATA":
        let formattedMarker = [];
        function filter(arr) {
          var f = []
          return arr.filter(function(n) {
            return f.indexOf(n.geogson) == -1 && f.push(n.geogson)
          })
        } 
        let marker = filter(action.marker);

        var objToPlot = {
          "type":"FeatureCollection",
          "features":''
        }      

      //objToPlot["features"] =formattedMarker;
      //return {...state, marker:objToPlot, markerArr:objToPlot.features}
      return {...state, marker:markerD}
    case "FETCH_IMPACT_SUCCESS":
      let finalHeadDataOn = [];
      if (action.ImpactFetchDatas.onlineImpactList.length != 0) {
        let alldata = JSON.parse(action.ImpactFetchDatas.onlineImpactList[0].onlineimpacteddata);
        let filterHeadData, filterHeadDatas = [];
        let e = [];
        alldata.map((d, i) => {
          let headenName = alldata.map((d) => d.hname);
          filterHeadData = headenName.reduce((a, b) => {
            if (a.indexOf(b) < 0) { a.push(b); } return a;
          }, []);
          filterHeadDatas = filterHeadData.slice();
          filterHeadData.map((f, i) => {
            if (filterHeadData[i] == filterHeadDatas[i]) {
              finalHeadDataOn[i] = alldata.filter((e) => e.hname == filterHeadData[i]);
            }
          })
        })
      } else {
        finalHeadDataOn = [];
      }
      return { ...state, bcpImpactData: finalHeadDataOn }
    case  "IMPACT_OFFLINE_DATA":
      let finalHeadDataOff = [];
      if (action.record.record.length <= 0) {
        finalHeadDataOff = [];
      } else {
        let alldata = action.record.record;
        let filterHeadData, filterHeadDatas = [];
        let e = [];
        alldata.map((d, i) => {
          let headenName = alldata.map((d) => d.hname);
          filterHeadData = headenName.reduce((a, b) => {
            if (a.indexOf(b) < 0) { a.push(b); } return a;
          }, []);
          filterHeadDatas = filterHeadData.slice();
          filterHeadData.map((f, i) => {
            if (filterHeadData[i] == filterHeadDatas[i]) {
              finalHeadDataOff[i] = alldata.filter((e) => e.hname == filterHeadData[i]);
            }
          })
        })
      }
      return { ...state, impactDataOff: finalHeadDataOff }
    case  "IMPACT_OFFLINE_WITH_DATA":
      let finalHeadData = [];
      if (action.record.record.length <= 0) {
        finalHeadData = [];
      } else {
        let alldata = action.record.record;
        let filterHeadData, filterHeadDatas = [];
        let e = [];
        alldata.map((d, i) => {
          let headenName = alldata.map((d) => d.hname);
          filterHeadData = headenName.reduce((a, b) => {
            if (a.indexOf(b) < 0) { a.push(b); } return a;
          }, []);
          filterHeadDatas = filterHeadData.slice();
          filterHeadData.map((f, i) => {
            if (filterHeadData[i] == filterHeadDatas[i]) {
              finalHeadData[i] = alldata.filter((e) => e.hname == filterHeadData[i]);
            }
          })
        })
      }
      return { ...state, impactDataOffOut: finalHeadData }
    case  "IMPACT_DETAIL_VIEW":
      let onliIm = [];
      if (action.record.length <= 0) {
        onliIm = [];
      } else {
        onliIm = action.record;
      }
      return { ...state, onlineImpactDetails: onliIm }
    case  "IMPACT_OFFLINE_DETAILS_VIEW":
      let offLineW = [];
      if (action.record.record.length <= 0) {
        offLineW = [];
      } else {
        offLineW = action.record.record;
      }
      return { ...state, impactOffDatas: offLineW }
    case  "IMPACT_OFFLINE_DETAILS_WITH_DATA":
      let offLImp = [];
      if (action.record.record.length <= 0) {
        offLImp = [];
      } else {
        offLImp = action.record.record;
      }
      return { ...state, impactOffDatasWithOut: offLImp }
    case "DELETE_SUCCESS_MESSAGE":
      let status = false;
      if (action.msg === "success") {
        status = true;
      }
      return { ...state, alertDelete: status }
    case "SAVE_CONFIG_SUCCESS":
      return {...state, configInterval: true}
    case "DUPLICATE_HEADEND":
      return {...state, duplicateHeadend: true}      
        default :
          return state
      }
    }
    
export default categories
