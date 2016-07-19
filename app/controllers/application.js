import Ember from 'ember';

export default Ember.Controller.extend({
  sharesController: Ember.inject.controller("shares"),
  applicationController: Ember.inject.controller("application"),

  currentCategory: Ember.computed.alias("sharesController.category"),

  showFixedTopBar: null,
  showBackToTopButton: null
});
