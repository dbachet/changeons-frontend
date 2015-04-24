import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    facebookLogin: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2').then(function () {
        alert("logged in");
      });
      return;
    }
  }
});