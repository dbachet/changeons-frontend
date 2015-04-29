import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["category-menu"],
  categoryMenuIsExpanded: false,
  currentCategory: "",
  locatedInFixedTopBar: false,
  specificHandlerName: function() {
    if (this.get("locatedInFixedTopBar") === true) {
      return "fixed-top-bar";
    } else {
      return "header-menu";
    }
  }.property(""),

  didInsertElement: function() {
    this.send("initToCloseCategoryMenuOnOutsideClick");
  },

  willDestroyElement: function() {
    // Unbind handler
    Ember.$("html").unbind("click."+this.get("specificHandlerName"), this.closeCategoryMenuHandler);
  },

  closeCategoryMenuHandler: function(event) {
    var self = event.data.self;

    if(!Ember.$(event.target).is(self.$('.not-expanded a, .not-expanded span'))){
      self.set("categoryMenuIsExpanded", false);
    }
  },

  actions: {
    expandCategoryMenu: function() {
      if (!this.get("categoryMenuIsExpanded")){
        this.set("categoryMenuIsExpanded", true);
      }
    },
    initToCloseCategoryMenuOnOutsideClick: function() {
      // TODO remove dependency with "html" element
      // We use specific handler name in order to
      // differenciate component called in fixed top bar
      // and the one called in header menu
      // i.e "click.header-menu" will be different than "click.fixed-top-bar"
      Ember.$("html").bind("click."+this.get("specificHandlerName"), { self: this }, this.closeCategoryMenuHandler);
    }
  }
});
