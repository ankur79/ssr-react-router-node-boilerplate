'use strict';

var SamlStrategy = require('passport-saml').Strategy;
var fs = require('fs');

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SamlStrategy({
    entryPoint: 'https://login.microsoftonline.com/9feebc97-ff04-42c9-a152-767073872118/saml2',
    issuer: 'COX_BCP_HEATHTRACKER',
    callbackUrl: 'https://bcpui-v1-node-bcp-dev.eps-nonprd.corp.cox.com/v1/saml',
    path: config.passport.saml.path,
    cert: process.env.SAML_CERT || fs.readFileSync('myCert.cer', 'utf-8'),
    signatureAlgorithm: 'sha256',
    acceptedClockSkewMs: -1,
    identifierFormat: null,
    //authnContext: 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows',
    logoutCallbackUrl: 'https://login.microsoftonline.com/9feebc97-ff04-42c9-a152-767073872118/saml2'

    //urn:oasis:names:tc:SAML:2.0:ac:classes:X509

  }, function (profile, done) {
    console.log('profile that we got', profile);
    return done(null, {
      id: profile.nameID, //nameID: 'Pawan.Kumar@cox.com', 
      samAccountName: profile['SamAccountName'],
      email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/email'],
      tenantid: profile['http://schemas.microsoft.com/identity/claims/tenantid'],
      objectidentifier: profile['http://schemas.microsoft.com/identity/claims/objectidentifier'],
      role: profile['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

    });
  }));
};