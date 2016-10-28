import Ember from "ember";
/* global moment */

export default Ember.Controller.extend({
  languages: ['FR', 'EN'],
  categories: [
    "Alimentation",
    "Agriculture",
    "Environnement",
    "Habitat",
    "High-Tech",
    "Politique",
    "Santé"
  ],

  actions: {
    create() {
      var model = this.get('model');
      model.save();
      return true;
    },
    updateLanguage(language) {
      var model = this.get('model');
      model.set('language', language);
    },
    updateCategory(category) {
      var model = this.get('model');
      model.set('category', category);
    }
  }
});
