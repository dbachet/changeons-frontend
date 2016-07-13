import Ember from "ember";

export default Ember.TextField.extend({
  tagName: "div",
  classNames: ["fb-share-button"],
  attributeBindings: ["data-href", "data-layout"],
  didInsertElement: function() {
    window.FB.XFBML.parse();
  }
});
