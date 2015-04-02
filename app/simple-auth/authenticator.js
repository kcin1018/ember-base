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
            }).then(function(response) {
                var data = JSON.parse(response);
                if (!Ember.isEmpty(data.token)) {
                    Ember.run(function() {
                        reject(data.error);
                    });
                } else {
                    Ember.run(function() {
                        resolve({ token: data.token });
                    });
                }
            }, function(xhr) {//, status, error) {
                var response = JSON.parse(xhr.responseText);
                Ember.run(function() {
                    reject(response.error);
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
