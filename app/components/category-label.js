import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["category-label"],
  category: "",
  color: "",
  currentCategory: "",
  attributeBindings: ['style'],
  style: function() {
    return "background: " + this.get("color");
  }.property("color"),
  isCurrentCategory: function() {
    if (this.get("category") === this.get("currentCategory")) {
      return true;
    } else {
      return false;
    }
  }.property("category", "currentCategory")
});
