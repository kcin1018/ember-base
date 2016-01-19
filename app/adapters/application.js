import DS from 'ember-data';
import Config from 'ember-base/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: Config.api.namespace,
  host: Config.api.host,
  authorizer: 'authorizer:application',
  shouldReloadAll() {
    return true;
  },
  shouldBackgroundReloadRecord() {
    return true;
  }
});
