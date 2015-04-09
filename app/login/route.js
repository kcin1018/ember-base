import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller) {
        controller.set('attrs.errorMsg', null);
    },
    actions: {
        didTransition: function() {
            var message = this.controller.get('attrs.auto_logout');
            if(message) {
                this.get('session').invalidate();
                this.controller.set('attrs.errorMsg', message);
            }
        }
    }
});
