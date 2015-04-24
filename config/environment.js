/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'changeons-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // "simple-auth": {
      //   serverTokenRevocationEndpoint: '/revoke'
      // },
      // torii: {
      //   providers: {
      //     'facebook-oauth2': {
      //       apiKey: '348157698724331',
      //       redirectUri: 'http://localhost:4200'
      //     }
      //   }
      // }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self'",
      'report-uri':"'localhost'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'none'"
    }
  };

  ENV['torii'] = {
    providers: {
      'facebook-oauth2': {
        apiKey:      '348157698724331',
        redirectUri: 'http://localhost:4200'
      }
    }
  };

  if (environment === 'development') {
    ENV.API_URL = "http://localhost:3000";
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.API_URL = "https://changeons-staging.herokuapp.com";
  }

  if (environment === 'production') {
    ENV.API_URL = "https://changeons-prod.herokuapp.com";
  }

  return ENV;
};
