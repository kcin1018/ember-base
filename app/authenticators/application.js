import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import Config from 'ember-base/config/environment';

export default BaseAuthenticator.extend({
  restore(data) {
    // console.log('authentication:restore', data);
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(...args) {
    // console.log('authentication:authenticate', args);
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: `${Config.api.host}/${Config.api.namespace}/${Config.api.auth}`,
        type: 'POST',
        data: { identification: args[0], password: args[1] },
        dataType: 'json',
        beforeSend(jqXHR) {
          let cookieValue = null;
          let name = 'csrftoken';
          if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
              let cookie = Ember.$.trim(cookies[i]);
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (`${name}=`)) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
              }
            }
          }
          jqXHR.setRequestHeader('X-CSRFToken', cookieValue);
        }
      }).then((response) => {
        if (!Ember.isEmpty(response.token)) {
          // console.log('success', response);
          // success token exists
          Ember.run(() => {
            resolve({ token: response.token, user_id: response.user_id });
          });
        } else {
          // error no token
          Ember.run(() => {
            reject({ error: response.message, code: 401 });
          });
        }
      }, (/*xhr, status, error*/) => {
        Ember.run(() => {
          reject({ error: 'Server Error', code: 400 });
        });
      });
    });
  },
  invalidate(/*data*/) {
    // console.log('authentication:invlidate', data);
    return new Ember.RSVP.Promise((resolve) => {
      Ember.$.ajax({ url: `${Config.api.host}/${Config.api.namespace}/${Config.api.auth}`, type: 'DELETE' }).always(() => {
        resolve();
      });
    });
  }
});
