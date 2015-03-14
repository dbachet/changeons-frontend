import Ember from "ember";


export default Ember.Route.extend({
  actions: {
    create: function() {
      var self = this;
      var mailingListRecipient = self.store.createRecord("mailing-list-recipient",
      {
        email: this.controller.get("email")
      });

      self.controller.set("model", mailingListRecipient);
      self.controller.set("isLoading", true);

      mailingListRecipient.save().then(function(){
        self.send("hasSucceeded");
      }, function(response) {
        self.send("hasFailed", response.status);
      });
    },

    hasSucceeded: function() {
      this.controller.set("hasSucceeded", true);
      this.send("resetServerError");
      this.controller.send("cleanEmailField");
      // Removes errors from the model
      this.controller.get("model").adapterDidCommit();
      this.controller.set("isLoading", false);
    },

    hasFailed: function(status) {
      this.controller.set("hasSucceeded", false);
      this.send("resetServerError");
      if (status <= 500) {
        this.controller.set("serverError", "Erreur serveur, veuillez réessayer ultérieurement.");
      }
      this.controller.set("isLoading", false);
    },

    resetServerError: function() {
      this.controller.set("serverError", null);
    }
  }
});
