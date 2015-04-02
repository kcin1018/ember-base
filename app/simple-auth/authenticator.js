import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import Config from '../config/environment';

export default Base.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },
    authenticate: function(credentials) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                url: Config['simple-auth'].endpoint,
                type: 'POST',
                data: { identification: credentials.identification, password: credentials.password },
                dataType: 'json'
            }).then(function(response) {
                if (!Ember.isEmpty(response.token)) {
                    // success token exists
                    Ember.run(function() {
                        resolve({token: response.token});
                    });
                } else {
                    // error no token
                    Ember.run(function() {
                        reject({error: response.error, code: 401});
                    });
                }
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject({error: error, code: 400});
                });
            });
        });
    },
    invalidate: function() {
        return new Ember.RSVP.Promise(function(resolve) {
            Ember.$.ajax({ url: Config['simple-auth'].endpoint, type: 'DELETE' }).always(function() {
                resolve();
            });
        });
    }
});
