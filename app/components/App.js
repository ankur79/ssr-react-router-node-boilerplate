import React from 'react';
import { Route } from 'react-router'

import List from './List'
import Home from './Home'
import Collapse from './views/accordionEg.js';
export default function App(props) {

    const { userInfo } = props;
    console.log(userInfo)
    return (
        <div>
            Your SSR React Router Node App initialised with data!

                <Route path="/" exact component={Home} /> 
                <Route path="/list" exact component={Collapse} /> 

        </div>
    )
};
