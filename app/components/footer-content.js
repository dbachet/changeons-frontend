import Ember from "ember";

export default Ember.TextField.extend({
  tagName: "footer",
  classNames: ["row"]
  // didInsertElement: function() {
  //   Ember.run.scheduleOnce('afterRender', this, this.adaptFooterHeight());

  // },
  // adaptFooterHeight: function() {
  //   // alert("ahoy");
  //   var footerHeight = $("footer").height();
  //   var bodyHeight = $("body").height();
  //   var footerPaddings = parseInt($("footer").css("padding-top"));
  //   var footerTopPosition = $("footer").offset().top;

  //   // if (bodyHeight >= footerTopPosition + footerPaddings + footerHeight) {
  //     // $("footer").height( footerHeight + ( bodyHeight + footerPaddings - footerTopPosition - 17 ))
  //     alert("bodyHeight:" + bodyHeight + "footer stuff:" + (footerTopPosition + footerPaddings + footerHeight));
  //   // }
  // }
});