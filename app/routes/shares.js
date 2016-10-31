import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  // Here, we're telling ember to "watch" the query parameter "page".
  // In this case, if the parameter changes, the model will be fetched again.
  queryParams: {
    category: {
      refreshModel: true
    }
  },


  model: function(params) {
    return this.findPaged('share', params);
  },
  actions: {
    backToHomepage() {
      this.refresh();
      $("html, body").animate({
        scrollTop: 0
      }, 300);
    }
  }
});
