$(document).ready(function() {
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
  });

  $('.nav__hide').hide();

  $('#nav-icon1').click(function() {
    $('.nav__hide').toggle();
    $('.nav__hide').fadeIn();
  });
});
