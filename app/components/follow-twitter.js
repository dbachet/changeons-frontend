import Ember from 'ember';
/* global twttr */

export default Ember.Component.extend({
  tagName: "div",
  id: null,
  didInsertElement: function() {
    twttr.widgets.createFollowButton(
      'ChangeonsOrg',
      document.getElementById(this.id),
      {
        size: 'medium'
      }
    );
  }
});
