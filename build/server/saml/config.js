'use strict';

var fs = require('fs');
module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
    },
    passport: {
      strategy: 'saml',
      saml: {
        callbackUrl: 'https://bcpui-v1-node-bcp-dev.eps-nonprd.corp.cox.com/v1/saml',
        path: process.env.SAML_PATH || '/v1/saml',
        entryPoint: 'https://login.microsoftonline.com/9feebc97-ff04-42c9-a152-767073872118/saml2',
        issuer: 'COX_BCP_HEATHTRACKER',
        cert: process.env.SAML_CERT || fs.readFileSync('myCert.cer', 'utf-8'),
        authnContext: 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows',
        identifierFormat: null
      }
    }
  },
  production: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
    },
    passport: {
      strategy: 'saml',
      saml: {
        callbackUrl: "https://bcpui-v1-node-bcp-dev.eps-nonprd.corp.cox.com/v1/saml",
        path: process.env.SAML_PATH || '/v1/saml',
        //entryPoint: process.env.SAML_ENTRY_POINT || 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://login.microsoftonline.com/9feebc97-ff04-42c9-a152-767073872118/saml2',
        issuer: 'COX_BCP_HEATHTRACKER',
        cert: process.env.SAML_CERT || fs.readFileSync('myCert.cer', 'utf-8'),
        authnContext: 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows',
        identifierFormat: null
      }
    }
  }
};