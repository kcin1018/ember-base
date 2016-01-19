import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
import Config from 'ember-base/config/environment';

export default BaseAuthorizer.extend({
  authorize(data, block) {
    block(Config.api.header.key, Config.api.header.key + data.token);
  }
});
