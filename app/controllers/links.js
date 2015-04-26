import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    moment.locale('fr');
    this.send("initToCloseCategoryMenuOnOutsideClick");
  },
  queryParams: ['category'],
  category: null,

  filteredArticles: function() {
    var category = this.get('category');
    var links = this.get('model');

    if (category) {
      return links.filterBy('category', category);
    } else {
      return links;
    }
  }.property('category', 'model'),

  categoryMenuExpanded: false,

  actions: {
    toggleCategoryMenu: function() {
      if (!this.get("categoryMenuExpanded")){
        this.set("categoryMenuExpanded", true);
      }
    },
    initToCloseCategoryMenuOnOutsideClick: function() {
      var self = this;
      Ember.$("html").click(function(e) {
        if(!Ember.$(event.target).is('.category-menu .not-expanded a, .category-menu .not-expanded span')){
          self.set("categoryMenuExpanded", false);
        }
      });
    }
  }
});
