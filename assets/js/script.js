// JavaScript Document
$(function () 
	
// typed

// toggle menu nav-mobile
$('body').on('click', '.mobile-nav-toggle', function() {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
});

$("document").click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
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


// Isotope para filtro portafolio
$(window).on('load', function() {
	var portfolioIsotope = $('.portfolio-container').isotope({
	itemSelector: '.portfolio-item'
});

$('#portfolio-flters li').on('click', function() {
$("#portfolio-flters li").removeClass('filter-active');
$(this).addClass('filter-active');

portfolioIsotope.isotope({
filter: $(this).data('filter')
});
aos_init();
});
// Venobox (caja de luz utilizada en portafolio)
$('.venobox').venobox({
'share': false,
framewidth: 'default', 
frameheight: 'default',
titleattr: 'false'
}); 
	
// OwlCarousel (Portafolio detalle) //
$(".portfolio-details-carousel").owlCarousel({
	autoplay: true,
    dots: true,
    loop: true,
    items: 1
});
AOS.init({
	offset: 120,
	duration: 400,
	easing: 'ease'
});
	
// OwlCarousel (Brand Design) //
$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
    0:{
      items:3
    },
    600:{
      items:3
    },
	700:{
	  items: 4
	},
    1000:{
      items:5
    }
    }
});
	


});