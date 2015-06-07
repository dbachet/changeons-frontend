import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr("string"),
  name: DS.attr("string"),
  url: DS.attr("string"),
  language: DS.attr("string"),
  category: DS.attr("string"),
  categoryColor: DS.attr("string"),
  user: DS.attr("string"),
  createdAt: DS.attr("date"),
  remoteId: DS.attr("string"),

  isLink: function() {
    if (this.get("type") === "Link") { return true; }
  }.property("type"),

  isTweet: function() {
    if (this.get("type") === "Tweet") { return true; }
  }.property("type")
});
