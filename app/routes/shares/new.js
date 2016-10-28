import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').createRecord('share', { type: 'Link' })
  },
  actions: {
    create() {
      this.transitionTo('shares');
      return true;
    }
  }
});
