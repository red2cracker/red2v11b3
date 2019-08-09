$(function(){

var navbarOffset = $( '.navbar' ).offset();
//alert(navbarOffset.top);

$( window ).scroll(function() {
  if ( $( document ).scrollTop() > navbarOffset.top ) {
    $( '.navbar' ).addClass( 'navbarFixed' );
  }
  else {
    $( '.navbar' ).removeClass( 'navbarFixed' );
  }
});

});



