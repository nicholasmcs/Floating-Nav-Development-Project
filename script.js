$(document).ready(function() {
  
//Hides Navigation on screen sizes 450px or smaller, exludes tablets
  if ($(window).width() <= 450) {
    $('.nav').hide();
  } else {

//Enables the navigation to be shown upon scrolling and removes upon returning to top
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > 50) {
        $('.nav').fadeIn(300);
      } else {
        $('.nav').fadeOut(300);
      }
    });
  }
});
