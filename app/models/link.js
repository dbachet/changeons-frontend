import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  url: DS.attr("string"),
  language: DS.attr("string"),
  category: DS.attr("string"),
  categoryColor: DS.attr("string"),
  user: DS.attr("string"),
  createdAt: DS.attr("date"),

  shortName: function() {
    var name = this.get("name").substring(0, 120);
    if (this.get("name").length >= 120) {
      return name + "...";
    } else {
      return name;
    }
  }.property("name")
});
