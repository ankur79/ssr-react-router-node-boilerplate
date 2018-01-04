/*import path from 'path';
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


app.get('/auth', function (req, res) {
    console.log(req)
    if (req.isAuthenticated()) {
        res.render('/list',
        {
            user: req.user
        });
    } else {
        res.render('/list',
        {
            user: null
        });
    }
});

app.get('/login', 
    passport.authenticate(config.passport.strategy,
    {
        successRedirect: '/list',
        failureRedirect: '/login'
    })
);

app.get('*', router);*/

const express = require('express');
const http = require('http');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const errorhandler = require('errorhandler');

var env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

console.log('Using configuration', config);

require('./config/passport')(passport, config);

var app = express();

app.set('port', config.app.port);
//app.set('views', __dirname + '/app/views');
//app.set('view engine', 'jade');
app.use(morgan('combined'));
app.use(cookieParser());path
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session(
  {
    resave: true,
    saveUninitialized: true,
    secret: 'this shit hits'
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../')));

require('./config/routes')(app, config, passport);

export default app;
