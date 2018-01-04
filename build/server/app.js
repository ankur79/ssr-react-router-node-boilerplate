'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var errorhandler = require('errorhandler');
var pug = require('pug');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

console.log('Using configuration', config);

require('./config/passport')(passport, config);

var app = express();

app.set('port', config.app.port);
app.set('views', path.join(__dirname, './', 'views'));
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(cookieParser());path;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'this shit hits'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../')));

require('./config/routes')(app, config, passport);

exports.default = app;