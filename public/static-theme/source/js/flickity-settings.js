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