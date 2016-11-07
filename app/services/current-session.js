import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  loadCurrentUser: function() {
    var userId = this.get('session.data.authenticated.id');
    var _this = this;

    if (!Ember.isEmpty(userId)) {
      return this.get('store').findRecord('user', userId).then(function(user) {
        _this.set('user', user);
      });
    }
  },
  isLoggedIn: Ember.computed.notEmpty('user')
});
