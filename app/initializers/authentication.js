import CustomAuthorizer from '../simple-auth/authorizer';
import CustomAuthenticator from '../simple-auth/authenticator';

export default {
    name:       'authentication',
    before:     'simple-auth',
    initialize: function(container) {
        container.register('authorizer:custom', CustomAuthorizer);
        container.register('authenticator:custom', CustomAuthenticator);
    }
};
