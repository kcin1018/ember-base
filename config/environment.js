/* jshint node: true */
module.exports = function(environment) {
    var ENV = {
        sessionLogoutTime: 30, // auto logout time in minutes
        modulePrefix: 'ember-base',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        'simple-auth': {
            authorizer: 'authorizer:custom',
            store: 'simple-auth-session-store:local-storage',
            endpoint: 'api/v1/auth',
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
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;
        ENV['simple-auth'].store = 'simple-auth-session-store:ephemeral';

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
