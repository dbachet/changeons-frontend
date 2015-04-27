import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "links",
  linksController: Ember.computed.alias("controllers.links"),

  categoryMenuIsExpanded: false,
  currentCategory: Ember.computed.alias("linksController.category"),

  actions: {
    expandCategoryMenu: function() {
      if (!this.get("categoryMenuIsExpanded")){
        this.set("categoryMenuIsExpanded", true);
      }
    },
    initToCloseCategoryMenuOnOutsideClick: function() {
      var self = this;
      Ember.$("html").click(function(e) {
        if(!Ember.$(event.target).is('.category-menu .not-expanded a, .category-menu .not-expanded span')){
          self.set("categoryMenuIsExpanded", false);
        }
      });
    }
  }
});
