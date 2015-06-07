import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "shares",
  sharesController: Ember.computed.alias("controllers.shares"),

  currentCategory: Ember.computed.alias("sharesController.category"),

  showFixedTopBar: null,
  showBackToTopButton: null
});
