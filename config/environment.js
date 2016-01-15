/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-base',
    podModulePrefix: 'ember-base/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    api: {
      host: 'http://localhost:8000',
      namespace: 'api/v1',
      auth: 'auth',
      header: {
        key: 'Authorization',
        prepend: 'Token: '
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' ",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:8000",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // ENV.api.header.key = 'differnt key';
    // ENV.api.header.prepend = 'differnt prepend string';
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

  if (environment === 'production') {
    // ENV.api.header.key = 'differnt key';
    // ENV.api.header.prepend = 'differnt prepend string';
  }

  return ENV;
};
