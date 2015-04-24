import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  url: DS.attr("string"),
  language: DS.attr("string"),
  category: DS.attr("string"),
  user: DS.attr("string")
});
