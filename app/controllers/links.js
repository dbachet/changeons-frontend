import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    moment.locale('fr');
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
      if (this.get("categoryMenuExpanded")){
        this.set("categoryMenuExpanded", false);
      } else {
        this.set("categoryMenuExpanded", true);
      }
    }
  }
});
