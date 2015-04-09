import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Configuration from 'simple-auth/configuration';
import Config from 'repository/config/environment';

export default Ember.Route.extend(ApplicationRouteMixin, {
    actions: {
        didTransition: function() {
            var session = this.get('session');
            var logoutTime = session.get('logoutTime');
            var now = moment().format('x');
            var currentUser = session.get('currentUser');

            if(currentUser && typeof currentUser.username === 'object') {
                // check the is_active from the current user id
                this.store.fetchById('user', this.get('session.content.user_id')).then(function(user){
                    currentUser.set('is_active', user.get('is_active'));
                });
            }

            if(now >= logoutTime) {
                // logout due to inactivity
                this.controllerFor('login').set('attrs.auto_logout', 'You have been auto logged out after ' + Config.get('sessionLogoutTime') + ' minutes.');
                this.send('invalidateSession');
                this.transitionTo('login');
            } else if(currentUser && typeof currentUser.username === 'object' && !currentUser.get('is_active')) {
                // logout due to not being active
                this.controllerFor('login').set('attrs.auto_logout', 'Your account has been disabled.');
                this.send('invalidateSession');
                this.transitionTo('login');
            } else if(logoutTime) {
                this.get('session').set('logoutTime', moment().add(Config.sessionLogoutTime, 'm').format('x'));
            }

            return true;
        },
        sessionInvalidationSucceeded: function() {
            if(!this.controllerFor('login').get('attrs.autologout')) {
                window.location.replace(Configuration.applicationRootUrl);
            }
        }
    }
});
