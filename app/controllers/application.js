import Ember from 'ember';

export default Ember.Controller.extend({
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
