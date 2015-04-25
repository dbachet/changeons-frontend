import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["category-label"],
  category: "",
  color: "",
  attributeBindings: ['style'],
  style: function() {
    return "background: " + this.get("color");
  }.property("color")
});
