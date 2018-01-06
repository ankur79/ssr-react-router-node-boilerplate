import React from 'react';
import { Route } from 'react-router'

import Welcome from './Welcome'
import Collapse from './views/accordionEg.js';
export default function Main(props) {
    const { userInfo } = props;
    console.log(userInfo)
    return (
        <div>
            <Route path="/u/" exact component={Welcome} /> 
            <Route path="/u/list" exact component={Collapse} /> 
        </div>
    )
};
