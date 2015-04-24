import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  // this.resource("mailing-list-recipients", {path: "/"}, function() {
  //   this.route("new", {path: "/"});
  // });
  this.route("logout");
  this.route("login");
});
