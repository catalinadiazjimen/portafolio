// JavaScript Document

$(document).on('click', '.mobile-nav-toggle', function() {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
});

var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
 });

$('.mobile-nav-toggle').on('load', function() {
	$('.navbar-toggler-icon')({
});

$('.mobile-nav-toggle').on('click', function() {
	
aos_init();
});

});

$(function(){
	
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});
	
$('.carousel').carousel({
  interval: 2000
})
});