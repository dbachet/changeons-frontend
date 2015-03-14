import Ember from "ember";

export default Ember.ObjectController.extend({
  errors: Ember.computed.alias("model.errors"),

  serverError: null,

  isLoading: false,

  hasErrors: Ember.computed.notEmpty("errors"),

  hasSucceeded: false,

  email: null,

  whenHasSucceeded: function() {
    Ember.$(".inputs").hide();
    Ember.$(".notify-me").hide();

    Ember.$("section#logo").animate({ padding: "20px 0" }, 500);
    if (Ember.$("body").width() >= 992) {
      Ember.$("section#logo img").animate({ width: "20%" }, 500);
    } else {
      Ember.$("section#logo img").animate({ width: "60%" }, 500);
    }

    Ember.$("#main-message div").html("").css({ opacity: 0 });

    Ember.$("#main-message").prepend("<div class='col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4 success-message alert alert-success' role='alert'>Vous allez recevoir un email pour confirmer votre inscription à la liste d'attente.</div>");
    Ember.$("#main-message p.alert-success").css({ opacity: 0 });

    Ember.$("#social-share").show();
    Ember.$("#social-share div").css({ opacity: 0 });

    Ember.$("body").animate({scrollTop : 0}, 300)

    Ember.$("#main-message p.alert-success").delay(500).animate({ opacity: 1 }, 500);
    Ember.$("#main-message div, #social-share div").delay(1000).animate({ opacity: 1 }, 500);

  }.observes("hasSucceeded"),

  actions: {
    cleanEmailField: function() {
      Ember.$("#email").val("");
      Ember.$("#email").focus();
    }
  }
});