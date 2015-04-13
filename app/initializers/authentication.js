import CustomAuthorizer from 'ember-base/simple-auth/authorizer';
import CustomAuthenticator from 'ember-base/simple-auth/authenticator';
import Session from 'simple-auth/session';
import Ember from 'ember';
import Config from 'ember-base/config/environment';

export default {
    name:       'authentication',
    before:     'simple-auth',
    initialize: function(container) {
        container.register('authorizer:custom', CustomAuthorizer);
        container.register('authenticator:custom', CustomAuthenticator);

        Session.reopen({
            setCurrentUser: function() {
                var id = this.get("user_id");
                var self = this;

                this.set('logoutTime', moment().add(Config.sessionLogoutTime, 'm').format('x'));

                if (!Ember.isEmpty(id)) {
                    return container.lookup("store:main").find("user", id).then(function(user) {
                        self.set("currentUser", user);
                    });
                }
            }.observes("user_id")
        });
    }
};
