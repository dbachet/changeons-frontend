import Ember from "ember";

export default Ember.View.extend({
  click: function() {
    // Close the category menu on click if expanded
    if(!Ember.$(event.target).is('.category-menu .not-expanded a, .category-menu .not-expanded span')){
      this.set("controller.categoryMenuIsExpanded", false);
    }
  },
});