// js here
var o = $(".login__logo");
$(".login").on("mousemove", function (t) {
  var e = -($(window).innerWidth() / 2 - t.pageX) / 30,
    n = ($(window).innerHeight() / 2 - t.pageY) / 10;
  o.attr(
    "style",
    "transform: rotateY(" +
      e +
      "deg) rotateX(" +
      n +
      "deg);-webkit-transform: rotateY(" +
      e +
      "deg) rotateX(" +
      n +
      "deg);-moz-transform: rotateY(" +
      e +
      "deg) rotateX(" +
      n +
      "deg);"
  );
});
