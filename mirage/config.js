import Mirage from 'ember-cli-mirage';
import Config from 'ember-base/config/environment';
import Ember from 'ember';

export default function() {
  this.urlPrefix = Config.api.host;    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = Config.api.namespace;    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.post(`/${Config.api.auth}`, (schema, request) => {
    let params = [];
    if (!Ember.isEmpty(request.requestBody)) {
      request.requestBody.split('&').forEach(function(part) {
        let item = part.split('=');
        params[item[0]] = item[1];
      });
    }

    let user = schema.db.users.where({ username: params.identification });
    if (user.length) {
      return {
        token: '2389h87g54bg2893bg23b23gf23',
        user_id: user[0].id
      };
    } else {
      return {
        error: true,
        message: 'Invalid username or password'
      };
    }
  });

  this.delete(`/${Config.api.auth}`, {}, 204);

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
