import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentSession: Ember.inject.service(),

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
