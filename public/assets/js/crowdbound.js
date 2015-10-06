//
// Flickity JS
// --------------------------------------------------

$(document).ready(function(){

	//
	// Slider 1
	// --------------------------
	$('.gallery-main-1').flickity();

	//
	// Slider 2
	// --------------------------

	// 1st gallery, main
	$('.gallery-main-2').flickity({
	  initialIndex: 1,
	  pageDots: false
	});

	// 2nd gallery, navigation
	$('.gallery-nav-2').flickity({
	  asNavFor: '.gallery-main-2',
	  initialIndex: 1,
	  contain: false,
	  prevNextButtons: false,
	  pageDots: false
	});

	//
	// Slider 3
	// --------------------------

	// 1st gallery, main
	$('.gallery-main-3').flickity({
	  initialIndex: 0,
	  pageDots: false
	});

	//
	// Team 1
	// --------------------------

	// 1st gallery, main
	$('.gallery-team-1').flickity({
	  initialIndex: 0,
	  pageDots: true,
	  cellAlign: 'left',
	  contain: true,
	  imagesLoaded: true
	});

	//
	// Portfolio 1
	// --------------------------

	// 1st gallery, main
	$('.portfolio-slider-1').flickity({
	  initialIndex: 0,
	  pageDots: true,
	  cellAlign: 'left',
	  contain: true,
	  imagesLoaded: true
	});
});
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

$(window).load(function() {
  //
  // Shuffle Portfolio
  // --------------------------

  /* initialize shuffle plugin */
  var $grid = $('.portfolio-grid-shuffle-1');
  $grid.shuffle({
    itemSelector: '.portfolio-item-shuffle', // the selector for the items in the grid
    speed: 500 // Transition/animation speed (milliseconds)
  });
  /* reshuffle when user clicks a filter item */
  $('.nav-pills li').click(function (e) {
    e.preventDefault();
    // set active class
    $('.nav-pills li').removeClass('active');
    $(this).addClass('active');
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
  });
});
//# sourceMappingURL=crowdbound.js.map
