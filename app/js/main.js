$(function () {
   $('.comments__slider').slick({
      dots: true,
      appendArrows: $('.slic-nav'),
      appendDots: $('.slic-nav'),
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
   });

   var mixer = mixitup('.gallery');
})