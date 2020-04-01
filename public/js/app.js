$(document).ready(function() {
  $('.nav__hide').hide();

  $('.hamburger').click(function() {
    $('.nav__hide').slideToggle('slow');
  });
});
