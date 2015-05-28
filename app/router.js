import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("links", {path: "/"});
  this.route("about");
  this.route("contact");
  this.route("credits");
});