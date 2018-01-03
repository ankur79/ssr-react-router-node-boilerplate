import path from 'path';
import express from 'express';
import cors from 'cors';
import passport from 'passport';

import router from './router';


var env = process.env.NODE_ENV || 'development';
const config = require('./saml/config')[env];
console.log('Using configuration', config);
require('./saml/passport')(passport, config);

const app = express();

const assets = express.static(path.join(__dirname, '../'));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(assets);

app.get('/login', 
    passport.authenticate(config.passport.strategy,
    {
        successRedirect: '/list',
        failureRedirect: '/login'
    })
);

app.get('*', router);

export default app;
