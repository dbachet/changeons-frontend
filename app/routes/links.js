import Ember from 'ember';

export default Ember.Route.extend({
  // Here, we're telling ember to "watch" the query parameter "page".
  // In this case, if the parameter changes, the model will be fetched again.
  queryParams: {
    category: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.findQuery("link", params);
  }
});
