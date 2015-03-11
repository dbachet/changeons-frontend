import Ember from "ember";

export default Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce("afterRender", this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    // Implement this hook in your own subclasses and run your jQuery logic there.
    // Do not add code here as this fires after EVERY didInsertElement event
    // console.log(Ember.$("body").height());
    var self = this;
    Ember.$("#logo a img").load(function() {
      self.updateFooterHeight();
    });

    Ember.$("#main-message").bind("DOMSubtreeModified",function(){
      self.updateFooterHeight();
    });

    Ember.$(window).resize(function() {
      self.updateFooterHeight();
    });
  },
  updateFooterHeight: function() {
    var footerHeight         = Ember.$("footer").height();
    var windowHeight         = Ember.$(window).height();
    var footerPaddings       = parseInt(Ember.$("footer").css("padding-top"));
    var footerTopPosition    = Ember.$("footer").offset().top;
    var footerBottomPosition = (footerTopPosition + footerPaddings + footerHeight);

    if (windowHeight >= footerBottomPosition) {
      var distanceBetweenWindowHeightAndFooterTop = windowHeight - (footerTopPosition + footerPaddings);
      Ember.$("footer").height(distanceBetweenWindowHeightAndFooterTop);
    } else {
      Ember.$("footer").removeAttr("style");
    }
  }
});