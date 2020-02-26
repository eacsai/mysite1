(function($){

	"use strict"; 

/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */

$(window).on('load', function() {
	$('#loading').fadeOut();
	$('#loading').delay(350).fadeOut('slow');
});

/* ---------------------------------------------- /*
* Animated scrolling / Scroll Up
/* ---------------------------------------------- */

$('a[href^="#"]').on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
	}, 1000);
	e.preventDefault();
});

$('#scroll-up').on("click", function(e){
	e.preventDefault();
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(window).on('scroll', function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});


/* ---------------------------------------------- /*
* Parallax init
/* ---------------------------------------------- */

if($("#scene").length > 0) {
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);
}
/* ---------------------------------------------- /*
* Testimonials
/* ---------------------------------------------- */


$('.testimonials').owlCarousel({
	singleItem: true,
	navigation: false,
	pagination: true,
	slideSpeed : 300,
	paginationSpeed : 400,
	autoPlay: 5000,
	navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
});

/* ---------------------------------------------- /*
* Initialize shuffle plugin
/* ---------------------------------------------- */

var $portfolioContainer = $('.list-items-container');

$('#filter li').on('click', function (e) {
	e.preventDefault();

	$('#filter li').removeClass('active');
	$(this).addClass('active');

	var group = $(this).attr('data-group');
	var groupName = $(this).attr('data-group');

	$portfolioContainer.shuffle('shuffle', groupName );
});


$(document).ready( function() {

	$('.simple-ajax-popup').magnificPopup({
		type: 'image',
		gallery:{enabled:true}
	});

});

/* ---------------------------------------------- /*
* WOW Animation When You Scroll
/* ---------------------------------------------- */

new WOW().init();

/* ---------------------------------------------- /*
* Ham Menu 
/* ---------------------------------------------- */

$(".hamburger-menu").on('click', function(){
	$(this).toggleClass("open");
	$(".menu-wrapper").toggleClass("open");
	$("body, html").toggleClass("ham-active");
	
	if($('body').hasClass('ham-active')){
		$('body, html').css("overflow", "hiddden");
	} else {
		$('body, html').css("overflow", "");
	}
});

/* ---------------------------------------------- /*
* Typed init
/* ---------------------------------------------- */

$(".typed").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
});

// $('body').fitVids();

})(jQuery);