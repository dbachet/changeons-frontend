import Ember from 'ember';

export default Ember.Controller.extend({
  init: function(){
    moment.locale('fr');
  }
});
