import Ember from 'ember';
export default Ember.Route.extend({
  actions: {
    create: function() {
      this.store.createRecord("mailing-recipient", {
        email: this.controller.get('email')
      }).save().then(function(){
        console.log('yeah');
      }, function() {
        console.log('nope');
      });
    }
  }
});
