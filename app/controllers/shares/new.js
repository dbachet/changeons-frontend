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
  category: null,
  language: null,

  actions: {
    create() {
      var model = this.get('model');
      var that = this;
      var bubbleUp = false;

      model.save().then(function() {
        this.set('language', null);
        this.set('category', null);
        bubbleUp = true;
      });

      return bubbleUp;
    },
    updateLanguage(language) {
      var model = this.get('model');
      model.set('language', language);
      this.set('language', language);
    },
    updateCategory(category) {
      var model = this.get('model');
      model.set('category', category);
      this.set('category', category);
    }
  }
});
