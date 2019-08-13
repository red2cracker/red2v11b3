$(function(){

/* https://www.codingfactory.net/10745 */
var navbarOffset = $('.navbar').offset();
//alert(navbarOffset.top);

/* https://sir.kr/qa/318793 */
$(window).resize(function() {
  navbarOffset = $('.navbar').offset();
});

$(window).scroll(function() {
  if ( $(document).scrollTop() > navbarOffset.top ) {
    $('.navbar').addClass('navbar-fixed');
  }
  else {
    $('.navbar').removeClass('navbar-fixed');
  }
});

});



