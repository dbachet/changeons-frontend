import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  classNames: ["link"],
  timeAgo: function() {
    return moment(this.get("link.createdAt")).fromNow();
  }.property("link")
});
