$(function(){

/* https://www.codingfactory.net/10745 */
var navbarOffset = $( '.navbar' ).offset();
//alert(navbarOffset.top);

$( window ).scroll(function() {
  if ( $( document ).scrollTop() > navbarOffset.top ) {
    $( '.navbar' ).addClass( 'navbar-fixed' );
  }
  else {
    $( '.navbar' ).removeClass( 'navbar-fixed' );
  }
});

});



