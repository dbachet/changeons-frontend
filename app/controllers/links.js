import Ember from "ember";
/* global moment */

export default Ember.Controller.extend({
  init: function(){
    moment.locale("fr");
  },
  queryParams: ["category"],
  category: null
});
