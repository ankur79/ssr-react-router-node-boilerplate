import { renderToString } from 'react-dom/server'
import React from 'react';
import { render } from 'react-dom';
import { matchPath, StaticRouter } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createMemoryHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';

import reducers from './components/reducers' 

import Main from './components/Main';


const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)



// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


const store = createStore(
    reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
  );

render((
    <Provider store={store}>
     <BrowserRouter>
        <Main/>
        </BrowserRouter>
    </Provider>), 
    document.getElementById('root')
);