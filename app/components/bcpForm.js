import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { connect } from 'react-redux';
import { createBcpData, dropdownFetchData, systemDropdown, preIncidentFetchData, userRolesData } from '../actions';
//import '../css/bcpForm.css';

import { AlertList } from "react-bs-notifier";
import  Select  from  'react-select';
//import  'react-select/dist/react-select.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import tz from 'moment-timezone';

//require('../css/bcpForm.css')
//import 'react-datetime/css/react-datetime.css';
//import { userInfoMethod } from '../actions';

class BcpForm extends Component {
    state = {
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
        formValues: 
        {
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
    }
    componentWillReceiveProps(nextProps){
        if(this.props.userEmail !== nextProps.userEmail) {
            this.state.formValues.createdby = nextProps.userEmail;
        }
    }    
    /*Get the curent date and set it in date field onload */
    getCurrentDate() {
        // var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth()+1; //January is 0!
        // var yyyy = today.getFullYear();
        // if ( dd < 10 ) { dd='0'+dd; } 
        // if ( mm < 10 ) { mm='0'+mm; } 
        // today = yyyy+'-'+mm+'-'+dd;
        var mObject = moment();
        var newTimestamp = moment(mObject).valueOf();
        var date = new Date(newTimestamp);
        this.state.formValues.bcpcreationdate = newTimestamp;
        this.setState({ bcp_date: mObject, bcp_date_select: mObject });        
        // var timestamp = new Date(today).getTime(); 
        // this.state.formValues.bcpcreationdate = timestamp;
        // this.setState({bcp_date:today, bcp_date_select: today});
    }
    componentDidMount() {
        this.getCurrentDate();
        this.props.dropDownData();
        this.props.userRolesData();      
    }

    /* Preincident baseline on change event and set the state*/
    handleChangeSelect = (e) => {
      if(e !== null) {
        this.state.formValues.snapshotid=e.value;   
        // let val = `${e.snapshotname} | offline: ${e.onlinedevicesCount}`;
        this.setState({preIncidentBaseline: e});  }
    }
    /* For all the input types set the state*/
    handleChange = (e) => {
        let formValues = this.state.formValues;
        let name = e.target.name;
        let value = e.target.value;
        formValues[name] = value;
        this.setState({ formValues });
    }
    /*On change event for subsystem dropdown adn update the set*/
    logChange = (subSystem) => {
        var date = moment(this.state.bcp_date_select).format('MM-DD-YYYY');
      	if(subSystem !== null) {
        const bcpnameF = `BCP-${this.state.system.label}-${subSystem.label}-${date}`
        this.state.formValues.bcpname= bcpnameF;
        this.state.formValues.subSystemid=subSystem.value;
        const system = this.state.formValues.systemid;
        this.setState({ subSystem });
        var both;
        both=`systemId=${system}&subSystemId=${subSystem.value}`
        this.props.preincidentData(both); } // Calling the preincident baseline snapshot dropdown
    }

    /* On change event for start date and update the state & bcp Report name accordingly */
    handleDate = (e) => {
        let value = e;
        this.setState({bcp_date_select:value})    
        var date = moment(e).format('MM-DD-YYYY');
        // var timestamp = new Date(myDate).getTime(); 
        // this.state.formValues.bcpcreationdate = timestamp;
        let bcpname;
        if(this.state.system === '' && this.state.subSystem === '') {
            bcpname = `BCP-${date}`; }
        if(this.state.system !== '') {
            bcpname = `BCP-${this.state.system.label}-${date}`; }
        if(this.state.system !== '' && this.state.subSystem !== '') {
            bcpname = `BCP-${this.state.system.label}-${this.state.subSystem.label}-${date}`; }
        this.state.formValues.bcpname= bcpname;        
        // this.setState({bcp_date_select: e.target.value });
    }

    /* Updated the state for incident commander*/
    handleName = (incidentCommander) => {
        this.state.formValues.createdby = incidentCommander.value;
        this.setState({incidentCommander});
    }

    /* validate the subsystem selection*/
    validateSubSystem() {
        if(this.props.dropdownSubsystem.length > 0) {
            const length = this.state.subSystem.length;
            if (length < 0 || length === 0) return "error";
            else return "success";
        } else { return "success"; }
    }    

    /* On change of system dropdown events*/
    handleSystemChange = (system) => {
        var date = moment(this.state.bcp_date_select).format('MM-DD-YYYY');
      	if(system !== null) {
        const bcpname = `BCP-${system.label}-${date}`
        this.state.formValues.bcpname= bcpname;
        this.state.formValues.systemid=system.value;
        let arr1 = this.props.dropdownData;
        let subsys = []; 
        /* clearing the subsystem dropdown when you don't have data for the system */  
        arr1.systemSubsystemList.map((item) => {
          if(system.value === item.systemid) {
            item.SubSystems.map((d) => {
              let snap = {label:'', value:''};
              snap["label"] = d.subsystemname;
              snap["value"] = d.subsystemid; 
              subsys.push(snap);  
            });
            if(subsys[0].label === "" && subsys[0].value === "" ) { subsys = [];}
          }   
        });               
        if(subsys.length === 0) {
            var single;
            single=`systemId=${this.state.formValues.systemid}`
            this.props.preincidentData(single);
        }
        this.props.subsystemData(system.value); //to get the subsystem dropdown date
        this.state.subSystem = '';
        this.state.formValues.subSystemid = '';
        //this.state.btnTitle = 'Select Pre Incident Baseline';
        this.state.preIncidentBaseline = ''; // empty the preincident selection
        this.setState({ system }); }
    }

    /* Clear the date when clear button is clicked*/
    clearForm=()=> {
        document.getElementById("bcpform").reset();
        this.setState({
            subSystem:"",
            system:"",
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
        })
    }
    /* Create bcp is clicked call the api*/
    saveData(res) {
        //var newTimestamp =  moment(this.state.bcp_date_select).valueOf();
        //var newTimestamp = moment(this.state.bcp_date_select).format("YYYY-MM-DD HH:mm:ss");
      	var newTimestamp = moment(this.state.bcp_date_select).tz("EST").format("YYYY-MM-DD HH:mm:ss");
        //var timestamp = new Date(this.state.bcp_date_select).getTime();
        this.state.formValues.bcpcreationdate = newTimestamp;
        this.setState({alertVisible: true});
        console.log(res);
        this.props.createBcp(res);
        this.clearForm();
    }
    /* Validate incident commander field*/
    validateIncidentNo() {
        const length = this.state.formValues.ticketnumber.length;
        if (length < 3) return "error";
        else return "success";
        return null;
    }
    /* Validate incident commander email check*/
    validateIncidentCommander() {
        const length = this.state.formValues.createdby.length;
        const email = this.state.formValues.createdby;
        if (length > 0){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                return "error";
            } else {
                return "success"
            }
        } else if(length < 3) {
            return "error";
        } else return "success"
        return null;
    }
    /* Validate system field*/
    validateSystem() {
        const length = this.state.system.length;
        if (length < 0 || length === 0) return "error"
        else { return "success" }
        return null;
    }
    /* Validate preincident baseline field*/
    validatepreIncidentBaseline() {
        const length = this.state.formValues.snapshotid.length;
        if (length < 0 || length === 0) return "error";
        else return "success"
        return null;
    }
    /* Validate description field*/
    validateIncidentDescription() {
        const length = this.state.formValues.incidentdescription.length;
        if (length < 3) return "error";
        if (length > 1000) return "error";
        else return "success";
        return null;
    }
    /* Validate for start date*/
    validateIncDate(){
        const date = this.state.bcp_date_select;
        if(typeof(date)==="object"){
            return "success";
        } else if(typeof(date)==="string"){
            return "error";
        }
    }    
    /* Duplicate Alert message*/
    handleAlertDismiss=()=> {
        this.setState({alertVisible: false});
    }

    /* Start date input field will not allow them to type*/
    handleKey(e) {
        let value = e;
        this.setState({bcp_date_select:value})
    }   
    render() {
        let flag = false;
        if ((this.validateIncDate() === "success") && (this.validatepreIncidentBaseline() === "success") && (this.validateIncidentDescription() === "success") && (this.validateSystem() === "success") && (this.validateIncidentCommander() === "success") && (this.validateIncidentNo() === "success") && (this.validateSubSystem() === "success")) {
            flag = true;
        }
        const testData = this.props.dropdownSubsystem;
        const alert = [{
            id: 1,
            type: "danger",
            message: "Duplicate BCP cannot be created",

        }];
        let button = null;
         if(this.props.bcpIncidentId === 0) {
            button= this.state.alertVisible?<AlertList alerts={alert} onDismiss={()=>this.handleAlertDismiss()} timeout={1500} style={{marginBottom:0, fontSize: 14}}/>:"";
              //this.state.alertVisible?<Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} dismissafter={1500}><h4 style={{marginBottom:0, fontSize: 14}}>Duplicate BCP cannot be created</h4></Alert>:""
        } else {
            button = null;
        }
        const { formValues, bcp_date, incident_id, system, subSystem, bcp_date_select } = this.state;
        const incidentCommander = this.state.formValues.createdby;
        const controlLabel = {fontFamily: 'Roboto Regular,Roboto', fontWeight: '400', fontStyle: 'normal', fontSize: '12px'};
        const options = this.props.userRoles;
        const systemOptions = this.props.dropdownSystem;
        const preIncidentBaselineOpt = this.props.dropdownSnapshot;
        //blocks date before today's date in the calender
        const today = Datetime.moment();
        const valid = function( current ){
            return current.isBefore( today );
        };        
        return (<div className="container-fluid">
            <form id="bcpform">
                <div className="col-md-12">
                    <div className="col-md-2">
                        <FormGroup controlId="Date" validationState={this.validateIncDate()}>
                            <ControlLabel style={controlLabel} >Start Date</ControlLabel>
                            <div>
                            {/* <input type="date" name="bcp_date" className="form-control" tabIndex="0" max={bcp_date} value={bcp_date_select} 
                        onChange={this.handleDate} onKeyDown={this.handleKey}/> */}
                            <Datetime onChange={this.handleDate} isValidDate={valid} ref="validateDate" selectedDate={bcp_date_select} value={bcp_date_select}/>
                            </div>
                        </FormGroup>
                    </div>
                    <div className="col-md-2">
                        <FormGroup controlId="IncidentNo" validationState={this.validateIncidentNo()}>
                            <ControlLabel style={controlLabel}>Ticket Number</ControlLabel>
                            <FormControl
                                name="ticketnumber"
                                type="text"
                                defaultValue={formValues["ticketnumber"]}
                                placeholder="Enter Incident No"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="incidentCommander" validationState={this.validateIncidentCommander()}>
                            <ControlLabel style={controlLabel}>Incident Commander Email</ControlLabel>
                            <FormControl
                                name="createdby"
                                type="text"
                                onChange={this.handleChange}
                                value={formValues["createdby"]}
                                placeholder="Enter Incident Commander Email"
                            />                            
                            {/* <Select
                                name='incidentCommander'
                                placeholder="(User Name)"
                                clearable={false}
                                onChange={this.handleName}
                                options={options}
                                value={incidentCommander} /> */}
                        </FormGroup>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-4">
                        <FormGroup controlId="formBasicText1" validationState={this.validateSystem()}>
                            <ControlLabel style={controlLabel}>System</ControlLabel>
                            <Select
                                clearable={false}
                                name='System'
                                placeholder='Select System'
                                onChange={this.handleSystemChange}
                                options={systemOptions}
                                value={system} />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="formSubSystem" validationState={this.validateSubSystem()}>
                            <ControlLabel style={controlLabel}>Sub System</ControlLabel>
                            <Select
                                clearable={false}
                                name="form-field-name"
                                value={subSystem}
                                options={testData}
                                onChange={this.logChange}
                                placeholder="Select Sub System"
                            />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup controlId="formBasicText2" validationState={this.validatepreIncidentBaseline()}>
                            <ControlLabel style={controlLabel}>Pre Incident Baseline</ControlLabel>
                            {/* <DropdownButton bsStyle="default" title={this.state.btnTitle} noCaret id="dropdown-no-caret" onSelect={this.handleChangeSelect}> 
                            <MenuItem header>
                            <table className="table table-bordered" style={{marginBottom:0}}><tbody><tr><td style={{width:'60%', textAlign: 'center',color: '#333', backgroundColor:'#ccc', fontWeight: 'bold' }}>Date/Time</td><td style={{width:'40%', fontWeight: 'bold', color: '#333', backgroundColor:'#ccc', textAlign: 'center'}}>Devices Online</td></tr></tbody></table>
                            </MenuItem>
                            {
                                preIncidentBaselineOpt.map((data, i) =>{ 
                                    return <MenuItem eventKey={data} key={i}>
                                    <table className="table table-bordered" style={{marginBottom:0}}><tbody><tr><td style={{width:'60%'}}>{data.snapshotname}</td><td style={{width:'40%'}}>{data.onlinedevicesCount}</td></tr></tbody></table>
                                    </MenuItem>    
                                })
                            }	                             
                            </DropdownButton>                           */}
                            <Select
                                name='preIncidentBaseline'
                                clearable={false}
                                placeholder="Select Pre-Incident Snapshot"
                                onChange={this.handleChangeSelect}
                                options={preIncidentBaselineOpt}
                                value={this.state.preIncidentBaseline} />
                        </FormGroup>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-4">
                        <FormGroup controlId="bcp_reportName">
                            <ControlLabel style={controlLabel}>BCP Report</ControlLabel>
                            <FormControl
                                disabled
                                name="bcpname"
                                type="text"
                                value={formValues["bcpname"]}
                                placeholder="BCP Report Name"
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                    </div> 
                    <div className="col-md-8">
                        <FormGroup controlId="formControlsTextarea" validationState={this.validateIncidentDescription()}>
                            <ControlLabel style={controlLabel}>Description</ControlLabel>
                            <FormControl
                                name="incidentdescription"
                                type="text"
                                onChange={this.handleChange}
                                value={formValues["incidentdescription"]}
                                placeholder="Enter Description for BCP Report"
                            />                            
                            {/* <FormControl name="incidentdescription"
                                componentClass="textarea"
                                onChange={this.handleChange}
                                placeholder="Enter Description for BCP Report" /> */}
                        </FormGroup>
                    </div>                                       
                </div>
                <div className="col-md-12">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">{button}</div>
                    <div className="col-md-7">
                        {flag ? <input type="button" className="btn btn-primary" onClick={() => this.saveData(formValues)} value="CREATE" /> : <input type="button" className="btn btn-default" value="CREATE" disabled style={{width: 90, height: 30}}/>}
                        &nbsp;&nbsp;&nbsp;
                        <input type="button" className="btn btn-primaryClear" onClick={()=>this.clearForm()} value="CLEAR"/>
                    </div>
                </div>
            </form>
        </div>)
    }
}

const mapStateToProps = state => {
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createBcp: data => { dispatch(createBcpData(data)) },
        dropDownData: () => { dispatch(dropdownFetchData()) },
        subsystemData: (data) => { dispatch(systemDropdown(data)) },
        preincidentData: (both) => { dispatch(preIncidentFetchData(both)) },
        userRolesData: () => { dispatch(userRolesData()) },
        //userInfo: (data) => { dispatch(userInfoMethod(data)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BcpForm);
