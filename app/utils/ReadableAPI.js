import axios from 'axios'

const src = "http://bcpapi-bcp-dev.eps-nonprd.corp.cox.com/bcpapi/bcpincidents/v1/";
//const src = "http://localhost:9090/bcpapi/bcpincidents/v1/";

export const createBcp = (post) =>
axios.post(`${src}createIncident`, post)
.then(function (response) { return response; }) 

export const updateStatusClose = (id) => 
axios.put(`${src}closingIncident/bcpincidentid=${id}`)
.then(function (response) { return response; }) 

export const bcpListData = (data) =>
fetch(`${src}getIncidentData`, {method: 'GET'})
  .then(res => res.json())
  .then(data => data)

export const usersData = () =>
fetch(`${src}getUserRoles`, {method: 'GET'})
  .then(res => res.json())
  .then(data => data)  

export const systemSnapshotData = (data) =>
fetch(`${src}getSystemSubsystemList`, {method: 'GET'})
  .then(res => res.json())
  .then(data => data)

export const preincidentData = (both) =>  
axios.get(`${src}getSnapShotIdList?${both}`)
.then(function (response) { return response; })

export const snapshotHourlyData = (id) =>
fetch(`${src}getSnapShotTwoHourList/bcpincidentid=${id}`, {method: 'GET'})
  .then(res => res.json())
  .then(data => data)  

export const onlineDevicesData = (dsid, sid) =>
axios.get(`${src}getDevicesCount?dailysnapshotid=${dsid}&systemid=${sid}`)
.then(function (response) { return response; })

export const bcpDetailEditApi = (id) =>
fetch(`${src}getIncidentById/bcpincidentid=${id}`, {method: 'GET'})
  .then(res => res.json())
  .then(data => data)

export const updateBcp = (postdata) =>
axios.put(`${src}updateIncident`, postdata)
.then(function (response) { return response; }) 

export const saveBCPComments = (postdata) =>
axios.put(`${src}saveBcpSummarySection`, postdata)
.then(function (response) {  return response; }) 

export const SummaryFetchData = (id) =>  
axios.get(`${src}getSnapshotSummary/bcpsnapshotid=${id}`)
.then(function (response) { return response; })

export const ManualSnapshotUpdate = (data) =>
axios.post(`${src}createManualSnapshot/`, data)
.then(function (response) { return response; })

export const ImpactFetchData = (snapShotId,systemId,subSystemId) =>  
axios.get(`${src}getImpactdataOnline?dailysnapshotid=${snapShotId}&systemId=${systemId}&subSystemId=${subSystemId}`)
.then(function (response) { return response; })

export const AdminData = () =>
axios.get(`${src}getAdminList`)
.then(function (response) { return response; })

export const UpdateHeadend = (data) =>
axios.put(`${src}addSubsystem`, data)
.then(function(response) { return response; })

export const DeleteSubsystem = (data) =>
axios.put(`${src}deleteSubsystem`, data)
.then(function(response) { return response; })

export const DetailViewMapData = (id,sid) =>
axios.get(`${src}incidentgeogson/${id}/${sid}`)
.then(function (response) { return response; })

export const bcpSendEmailApi = (reqjs) =>
axios.post(`${src}sendMail`, reqjs)
.then(function (response) { return response; }) 

export const getMarkerApi = (id) =>
axios.get(`${src}getMapData/${id}`)
.then(function (response) { return response; }) 

export const impactOnline = (reqOnline) =>
axios.post(`${src}getOnlineDataDetails`,reqOnline)
.then(function (response) { return response; }) 

export const impactOfflineAllData= (snapId) =>
axios.get(`${src}getSnapshotOffflineData/bcpsnapshotid=${snapId}/sectiontype=IMPACTED_DATA_OFF`)
.then(function (response) { return response; }) 

export const impactOfflineWithData= (snapId) =>
axios.get(`${src}getSnapshotOffflineData/bcpsnapshotid=${snapId}/sectiontype=IMPACTED_DATA_OFF_WITH_OUTAGES`)
.then(function (response) { return response; }) 

export const impactOffViewAllData= (dailysnapshotid,node) =>
axios.get(`${src}getSnapshotOffflineDataDetails/bcpsnapshotid=${dailysnapshotid}/sectiontype=IMPACTED_DATA_OFF/node=${node}`)
.then(function (response) { return response; }) 

export const impactOffWithViewDataMethod= (dailysnapshotid,node) =>
axios.get(`${src}getSnapshotOffflineDataDetails/bcpsnapshotid=${dailysnapshotid}/sectiontype=IMPACTED_DATA_OFF_WITH_OUTAGES/node=${node}`)
.then(function (response) { return response; })  

export const deleteBcpId = (id) => 
axios.put(`${src}deleteBcpIncident/bcpincidentid=${id}`)
.then(function (response) { return response; }) 

export const configInterval = (period, frequency) =>
axios.put(`${src}updateConfiguration/period=${period}/frequency=${frequency}`)
.then(function (response) { return response; }) 

export const addHeadend = (data) =>
axios.post(`${src}addHeadend`,data)
.then(function (response) { return response; }) 

// export const UserInfo = (data) =>
// axios(data).then((response)=>{
//   if(response.status === 200){
//       var data = axios.get('https://coxbcp.predix-uaa.run.aws-usw02-pr.ice.predix.io/userinfo',{headers:{Authorization:'bearer '+response.data.access_token}}).then((res)=>{
//         return res.data;
//       });
//   }
//   return data;
// });


       
