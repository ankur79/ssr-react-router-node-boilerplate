import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createMemoryHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import routelist from '../routes';
import renderFullPage from '../renderFullPage';

import App from '../../components/App';
import Main from '../../components/Main';

import reducers from '../../components/reducers' // Or wherever you keep your reducers



module.exports = function (app, config, passport) {
  
  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('index',
        {
          user: req.user
        });
    } else {
      res.render('index',
        {
          user: null
        });
    }
    /*
        // Create a history of your choosing (we're using a browser history in this case)
        const history = createHistory()

        // Build the middleware for intercepting and dispatching navigation actions
        const middleware = routerMiddleware(history)
    
        const match = routelist.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
    
        // Add the reducer to your store on the `router` key
        // Also apply our middleware for navigating
        const store = createStore(
            combineReducers({
            reducers,
            router: routerReducer
            }),
            applyMiddleware(middleware)
        )
    
        if (!match) {
            res.status(404).send('page not found');
            return;
        }
    let userInfo = null;
    if (req.isAuthenticated()) {
      userInfo = req.user;
    } else {
      //userAuth = false;
    }

    console.log(userInfo)
    const context = {}
            
    const html = renderToString(
        <Provider store={store}>
           
            <StaticRouter  location={req.url} context={context}>
                <App userInfo={userInfo}/>
            </StaticRouter>
      </Provider>
     
    )

    //res.status(200).send(renderFullPage(html));
    res.render('index', {title: 'Express', data: [],  html });*/

  });

  app.get('/u/*', function (req, res) {
        // Create a history of your choosing (we're using a browser history in this case)
        const history = createHistory()

        // Build the middleware for intercepting and dispatching navigation actions
        const middleware = routerMiddleware(history)

        const match = routelist.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

        // Add the reducer to your store on the `router` key
        // Also apply our middleware for navigating
        const store = createStore(
            combineReducers({
            reducers,
            router: routerReducer
            }),
            applyMiddleware(middleware)
        )

        if (!match) {
            res.status(404).send('page not found');
            return;
        }
    let userInfo = null;
    if (req.isAuthenticated()) {
      userInfo = req.user;
    } else {
      //userAuth = false;
    }

    console.log(userInfo)
    const context = {}
            
    const html = renderToString(
        <Provider store={store}>
            { /* ConnectedRouter will use the store from Provider automatically */ }
            <StaticRouter  location={req.url} context={context}>
                <Main userInfo={userInfo}/>
            </StaticRouter>
      </Provider>
    
    )

    //res.status(200).send(renderFullPage(html));
    res.render('main', {title: 'Express', data: [],  html });

  });


  app.get('/login',
    passport.authenticate(config.passport.strategy,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );

  //app.post(config.passport.saml.path,
  app.post('/v1/saml',
    passport.authenticate(config.passport.strategy,
      {
        failureRedirect: '/',
        failureFlash: true
      }),
    function (req, res) {
      res.redirect('/');
    }
  );

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get('/profile', function (req, res) {
    
    if (req.isAuthenticated()) {
      res.render('profile',
        {
          user: req.user
        });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/logout', function (req, res) {
    delete req.session;
    req.logout();
    // TODO: invalidate session on IP
    res.redirect('/');
  });

};
