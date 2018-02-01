/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    DS: {
      // LocalHost
      host: 'http://127.0.0.1:3333',
      // Staging Database
      //  host: 'https://firstlook-staging-api.herokuapp.com',
      // Production Database
      // host: 'https://firstlook-spectrumreach-api.herokuapp.com',
      namespace: 'api',
    },
    cloudinary: {
    cloudName: `http-www-firstlookspectrum-com`,
    uploadPreset: `biiz3ens`,
    },

    modulePrefix: 'ember-folder',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
      // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
     'ember-simple-auth': {
       authorizer: 'authorization:token',
     },

     'ember-simple-auth-token': {}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // ENV.DS.host = 'https://firstlook-spectrumreach-api.herokuapp.com';
  }
  ENV['ember-simple-auth-token'].serverTokenEndpoint = `${ENV.DS.host}/api/token-auth`;

  return ENV;
};
