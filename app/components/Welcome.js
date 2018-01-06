import React from 'react';
//import '../css/accordion.css';
//require('../css/accordion.css')
//import ReactTableIndex from '../components/reactTableIndex';
import BcpForm from '../components/bcpForm';
import {Panel, PanelGroup} from 'react-bootstrap'; 

const Collapse = () => (
  <PanelGroup>
      <Panel collapsible header="CREATE BCP REPORT" eventKey="1">
          <BcpForm/>
      </Panel>
      {/*<Panel collapsible defaultExpanded header="VIEW ALL BCP REPORT(S)" eventKey="2">
          <ReactTableIndex/>
</Panel>*/}
  </PanelGroup> 
);


export default Collapse;