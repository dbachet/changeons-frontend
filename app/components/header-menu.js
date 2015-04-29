import Ember from 'ember';
import InViewportMixin from "../mixins/in-viewport";

export default Ember.Component.extend(InViewportMixin, {
  tagName: "div",
  classNames: ["col-xs-12"],
  applicationController: null,

  hasEnteredViewport: function() {
    // This code will run when the header-menu will not be
    // fully visible on the window
    this.get("applicationController").set("showFixedTopBar", this.get("exitedViewport"));
  }.observes("exitedViewport")

});
