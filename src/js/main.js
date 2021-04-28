$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".burger, .nav").toggleClass("active");
  });
});
//input mask
$('input[type = "tel"]').inputmask("+\\9\\96(999) 99-99-99");
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".backToTop").fadeIn();
  } else {
    $(".backToTop").fadeOut();
  }
});
//overlays open
$(".cta__form__button, .cta__form2__button").on("click", function () {
  $(".overlay, .popup-thanks").fadeIn("slow");
});
//overlays close
$(".popup-close").on("click", function () {
  $(".popup-thanks, .overlay").fadeOut("slow");
});
