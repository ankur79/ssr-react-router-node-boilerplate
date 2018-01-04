'use strict';

var SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SamlStrategy({
    callbackUrl: config.passport.saml.callbackUrl,
    path: config.passport.saml.path,
    entryPoint: config.passport.saml.entryPoint,
    issuer: config.passport.saml.issuer,
    cert: config.passport.saml.cert
    //   authnContext: config.passport.saml.authnContext

  }, function (profile, done) {
    return done(null, {
      id: profile.uid,
      email: profile.email,
      displayName: profile.cn,
      firstName: profile.givenName,
      lastName: profile.sn
    });
  }));
};