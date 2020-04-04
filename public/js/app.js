$(document).ready(function() {
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
  });

  $('#navbar__links--container').hide();

  $('#nav-icon1').click(function() {
    $('#navbar__links--container').slideToggle('slow');
  });
});
