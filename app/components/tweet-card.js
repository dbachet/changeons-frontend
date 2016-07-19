import Ember from 'ember';
/* global twttr */

export default Ember.Component.extend({
  tagName: "li",
  classNames: ["tweet"],
  tweet: null,
  didInsertElement: function() {
    twttr.widgets.createTweet(this.get("tweet.remoteId"),
      document.getElementById(this.elementId),
      {
        lang: "fr",
        align: "center"
      }
    );
  }
});
