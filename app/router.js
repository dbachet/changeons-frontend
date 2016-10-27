import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("shares", { path: "/"}, function(){
    this.route("new")
  });
  this.route("about");
  this.route("contact");
  this.route("credits");
  this.route("login");
});

export default Router;
