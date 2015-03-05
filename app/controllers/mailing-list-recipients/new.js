import Ember from "ember";

export default Ember.ObjectController.extend({
  errors: Ember.computed.alias("model.errors"),

  serverError: null,

  hasErrors: Ember.computed.notEmpty("errors"),

  hasSucceeded: false,

  email: null,

  hideForm: function() {
    Ember.$(".inputs").hide();
    Ember.$(".notify-me").hide();
    Ember.$("#description p").html("Une information d'envergure ne peut se passer des réseaux sociaux.</br>N'hésitez pas à partager cette page !");
    Ember.$(".social-share").show();
  }.observes("hasSucceeded"),

  actions: {
    cleanEmailField: function() {
      Ember.$("#email").val("");
      Ember.$("#email").focus();
    }
  }
});