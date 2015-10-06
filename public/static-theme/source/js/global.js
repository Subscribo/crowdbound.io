//
// Switches
// --------------------------------------------------

// Small
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-small'));

elems.forEach(function(html) {
  var switchery = new Switchery(html, { size: 'small', color: '#4E3C91' });
});

// Normal
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
  var switchery = new Switchery(html, { color: '#4E3C91' });
});

// Large
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-large'));

elems.forEach(function(html) {
  var switchery = new Switchery(html, { size: 'large', color: '#4E3C91' });
});

//
// Ripple effect on buttons
// --------------------------------------------------

$(document).ready(function(){
	$('.btn').click(function(){
	  $(this).addClass('ripple');
	    setTimeout(function(){
	    $('.btn').removeClass('ripple')},500)
	});
});

$(document).ready(function() {
  var hamburger = $('.hamburger-icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });
});

//open search form
$('.innova-navbar-search-trigger').on('click', function(event){
	event.preventDefault();
	toggleSearch();
	closeNav();
});

function toggleSearch(type) {
	if(type=="close") {
		//close serach
		$('.innova-navbar-search').removeClass('is-visible');
		$('.innova-navbar-search-trigger').removeClass('search-is-visible');
		$('.innova-navbar-overlay').removeClass('search-is-visible');
	} else {
		//toggle search visibility
		$('.innova-navbar-search').toggleClass('is-visible');
		$('.innova-navbar-search-trigger').toggleClass('search-is-visible');
		$('.innova-navbar-overlay').toggleClass('search-is-visible');
		if($(window).width() > MqL && $('.innova-navbar-search').hasClass('is-visible')) $('.innova-navbar-search').find('input[type="search"]').focus();
		($('.innova-navbar-search').hasClass('is-visible')) ? $('.innova-navbar-overlay').addClass('is-visible') : $('.innova-navbar-overlay').removeClass('is-visible') ;
	}
}

//
// Smooth Page Scrolling
// --------------------------
$(document).ready(function(){
	$(function() {
	    $('.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top - 70
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});
});
