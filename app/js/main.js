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

   //header sticky
   $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
         $('.header').addClass('header--sticky')
      } else {
         $('.header').removeClass('header--sticky')
      }
   })

   const headerHeight = $('.header').outerHeight();

   $('.menu__link').on('click', function (event) {
      event.preventDefault();

      const scrollAnchor = $(this).attr('href');

      let scrollPoint = $(scrollAnchor).offset().top - headerHeight;


      $('html, body').animate({
         scrollTop: scrollPoint
      }, 500);

       return false;
   })
})