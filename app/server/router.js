import { renderToString } from 'react-dom/server'
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createMemoryHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import routes from './routes';
import renderFullPage from './renderFullPage';
import getPokemon from '../services/getPokemon';
import App from '../components/App';
import reducers from '../components/reducers' // Or wherever you keep your reducers

export default function router(req, res) {

    // Create a history of your choosing (we're using a browser history in this case)
    const history = createHistory()

    // Build the middleware for intercepting and dispatching navigation actions
    const middleware = routerMiddleware(history)

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

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

    return getPokemon.withAbility('telepathy')
        .then(resp => {
            const pokemon = { list: resp.data.pokemon } ;

            const context = {}
            
            const html = renderToString(
                <Provider store={store}>
                    { /* ConnectedRouter will use the store from Provider automatically */ }
                    <ConnectedRouter history={history}>
                        <App pokemon={pokemon}/>
                    </ConnectedRouter>
              </Provider>
             
            )

            res.status(200).send(renderFullPage(html, pokemon));
        })
        .catch(err => res.status(404).send(`${err}: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!`));
};
