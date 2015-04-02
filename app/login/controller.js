import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'authenticator:custom',
    attrs: {},
    actions: {
        authenticate: function() {
            var _this = this;
            this._super().then(null, function(error) {
                if(error.code === 401 || error.code === 400){
                    _this.set('attrs.errorMsg', "The username and/or password is incorrect");
                } else {
                    _this.set('attrs.errorMsg', "An error occured, please try again");
                }
            });
        }
    }
});
