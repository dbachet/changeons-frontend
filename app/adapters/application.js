import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV['API_HOST'],
  namespace: "api/v1",
  authorizer: "authorizer:devise"
});
