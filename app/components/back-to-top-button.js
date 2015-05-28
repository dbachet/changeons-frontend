import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "button",
  classNames: ["back-to-top"],
  click: function() {
    console.log("hohoho");
    Ember.$('html, body').animate({scrollTop: 0}, 300);
    return false;
  }
});
