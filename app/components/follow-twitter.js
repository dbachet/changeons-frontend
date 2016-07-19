import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  id: null,
  didInsertElement: function() {
    window.twttr.widgets.createFollowButton(
      'ChangeonsOrg',
      document.getElementById(this.id),
      {
        size: 'medium'
      }
    );
  }
});
