import Ember from "ember";
/* global moment */

export default Ember.Controller.extend({
  languages: ['FR', 'EN'],

  actions: {
    create() {
      var model = this.get('model');
      model.save();
      return false;
    },
    updateLanguage(language) {
      var model = this.get('model');
      model.set('language', language);
    }
  }
});
