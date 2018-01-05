import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main';

render((
    <Router>
        <Main pokemon={window.__PRELOADED_STATE__}/>
    </Router>), 
    document.getElementById('root')
);