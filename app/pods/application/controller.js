import Ember from 'ember';

const {inject} = Ember;

export default Ember.Controller.extend({
    session: inject.service('session'),

    actions: {
        logout() {
            this.get('session').invalidate();
        }
    }
});
