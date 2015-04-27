import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["category-menu", "col-xs-12", "col-md-8", "col-md-offset-2"],
  categoryMenuIsExpanded: false,
  currentCategory: "",
  didInsertElement: function() {
    this.send("initToCloseCategoryMenuOnOutsideClick");
  },

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
