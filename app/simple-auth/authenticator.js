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
                var data = JSON.parse(response);

                if (!Ember.isEmpty(data.token)) {
                    console.log('EMPTY:', {message: data.error, code: 401});
                    // error no token
                    Ember.run(function() {
                        reject({message: data.error, code: 401});
                    });
                } else {
                    // success token exists
                    Ember.run(function() {
                        resolve({ token: data.token, code: 200});
                    });
                }
            }, function(xhr, status, error) {
                console.log('ERROR:', {message: error, code: 400});
                Ember.run(function() {
                    reject({message: error, code: 400});
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
