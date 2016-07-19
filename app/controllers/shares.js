import Ember from "ember";
/* global moment */

export default Ember.Controller.extend({
  init: function(){
    moment.locale("fr");
  },

  queryParams: ["category", "page", "perPage"],
  category: null,

  // binding the property on the paged array
  // to the query params on the controller
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages",

  displayPaginationBar: Ember.computed.gt('content.totalPages', 1)
});
