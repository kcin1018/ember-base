import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    actions: {
        didTransition: function() {
            var session = this.get('session');
            var logoutTime = session.get('logoutTime');
            var now = moment().format('x');

            if(now >= logoutTime || !session.get('currentUser').is_active) {
                this.controllerFor('login').set('attrs.autologout', true);
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
