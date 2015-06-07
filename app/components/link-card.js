import Ember from 'ember';
/* global moment */

export default Ember.Component.extend({
  tagName: "li",
  classNames: ["link"],
  formattedCreatedAt: function() {
    return moment(this.get("link.createdAt")).format('hh:mm - Do MMM YYYY');
  }.property("link")
});