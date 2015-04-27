import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "links",
  linksController: Ember.computed.alias("controllers.links"),

  currentCategory: Ember.computed.alias("linksController.category")
});
