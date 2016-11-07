import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr(),
  admin: DS.attr(),
  isAdmin: function() {
    return Ember.isEqual(this.get('admin'), true);
  }.property('admin')
});
