import Ember from "ember";

export default Ember.TextField.extend({
  tagName: "a",
  classNames: "twitter-share-button",
  attributeBindings: ["data-size", "data-url", "data-text", "data-hashtags", "data-count"],
  didInsertElement: function() {
    window.twttr.widgets.load();
  }
});
