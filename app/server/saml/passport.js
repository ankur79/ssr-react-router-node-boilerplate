import { Strategy } from 'passport-saml'
const SamlStrategy = Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    console.log(user)
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    console.log(user)
    done(null, user);
  });

  passport.use(new SamlStrategy(
    {
      callbackUrl: config.passport.saml.callbackUrl,
      path: config.passport.saml.path,
      entryPoint: config.passport.saml.entryPoint,
      issuer: config.passport.saml.issuer,
      cert: config.passport.saml.cert,
      signatureAlgorithm: 'sha256',
      acceptedClockSkewMs: -1,
      identifierFormat: config.passport.saml.identifierFormat,
      //authnContext: config.passport.saml.authnContext
    },
    function (profile, done) {
      console.log(profile);
      var user = profile;
      return done(null, 
        {
          id: profile.nameID, 
          samAccountName:profile['SamAccountName'],
          email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/email'],
          tenantid: profile['http://schemas.microsoft.com/identity/claims/tenantid'],
          objectidentifier:profile['http://schemas.microsoft.com/identity/claims/objectidentifier'],
          role:profile['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        });
    })
  );
};

        // {
        //   id: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        //   email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
        //   displayName: profile['http://schemas.microsoft.com/identity/claims/displayname'],
        //   firstName: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
        //   lastName: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname']
        // });
