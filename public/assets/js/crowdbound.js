(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
module.exports = function (css) {
  var head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  
  head.appendChild(style);
};

module.exports.byUrl = function(url) {
  var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = url;
  
  head.appendChild(link);
};
},{}],3:[function(require,module,exports){
var css = '/*\
 *\
 * Main stylesheet for Switchery.\
 * http://abpetkov.github.io/switchery/\
 *\
 */\
\
.switchery {\
  background-color: #fff;\
  border: 1px solid #dfdfdf;\
  border-radius: 20px;\
  cursor: pointer;\
  display: inline-block;\
  height: 30px;\
  position: relative;\
  vertical-align: middle;\
  width: 50px;\
}\
\
.switchery > small {\
  background: #fff;\
  border-radius: 100%;\
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\
  height: 30px;\
  position: absolute;\
  top: 0;\
  width: 30px;\
}'; (require('cssify'))(css); module.exports = css;
},{"cssify":2}],4:[function(require,module,exports){
(function (process){

/**
 * Switchery 0.1.1
 * http://abpetkov.github.io/switchery/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Switchery`.
 */

module.exports = Switchery;

/**
 * Set Switchery default values.
 *
 * @api public
 */

var defaults = {
    color    : '#64bd63'
  , className: 'switchery'
  , disabled : false
  , speed    : '0.1s'
};

if (process.browser != null) {
  require('./switchery.css');
}

/**
 * Create Switchery object.
 *
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Switchery(element, options) {
  if (!(this instanceof Switchery)) return new Switchery(options);

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (!(i in this.options)) {
      this.options[i] = defaults[i];
    }
  }

  if (this.element.type == 'checkbox') this.init();
}

/**
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Show custom switch after the target element.
 *
 * @api private
 */

Switchery.prototype.show = function() {
  var switcher = this.create();
  this.element.parentNode.appendChild(switcher);
};

/**
 * Create custom switch.
 *
 * @returns {Object} this.switcher
 * @api private
 */

Switchery.prototype.create = function() {
  this.switcher = document.createElement('span');
  this.jack = document.createElement('small');
  this.switcher.appendChild(this.jack);
  this.switcher.className = this.options.className;

  return this.switcher;
};

/**
 * See if input is checked.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isChecked = function() {
  return this.element.checked;
};

/**
 * See if switcher should be disabled.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isDisabled = function() {
  return this.options.disabled || this.element.disabled;
};

/**
 * Set switch jack proper position.
 *
 * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
 * @api private
 */

Switchery.prototype.setPosition = function (clicked) {
  var checked = this.isChecked()
    , switcher = this.switcher
    , jack = this.jack;

  if (clicked && checked) checked = false;
  else if (clicked && !checked) checked = true;

  if (checked === true) {
    this.element.checked = true;

    if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - jack.offsetWidth + 'px';
    else jack.style.left = parseInt(switcher.currentStyle['width']) - jack.offsetWidth + 'px';

    if (this.options.color) this.colorize();
  } else {
    jack.style.left = '0';
    this.element.checked = false;
    this.switcher.style.backgroundColor = '';
    this.switcher.style.borderColor =  '';
  }
};

/**
 * Set speed.
 *
 * @api private
 */

Switchery.prototype.setSpeed = function() {
  this.switcher.style.transitionDuration = this.options.speed;
  this.jack.style.transitionDuration = this.options.speed;
};

/**
 * Copy the input name and id attributes.
 *
 * @api private
 */

Switchery.prototype.setAttributes = function() {
  var id = this.element.getAttribute('id')
    , name = this.element.getAttribute('name');

  if (id) this.switcher.setAttribute('id', id);
  if (name) this.switcher.setAttribute('name', name);
};

/**
 * Set switch color.
 *
 * @api private
 */

Switchery.prototype.colorize = function() {
  this.switcher.style.backgroundColor = this.options.color;
  this.switcher.style.borderColor = this.options.color;
};

/**
 * Handle the switch click event.
 *
 * @api private
 */

Switchery.prototype.handleClick = function() {
  var $this = this
    , switcher = this.switcher;

  if (this.isDisabled() === false) {
    if (switcher.addEventListener) {
      switcher.addEventListener('click', function() {
        $this.setPosition(true);
      });
    } else {
      switcher.attachEvent('onclick', function() {
        $this.setPosition(true);
      });
    }
  } else {
    this.element.disabled = true;
  }
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {
  this.hide();
  this.show();
  this.setSpeed();
  this.setPosition();
  this.setAttributes();
  this.handleClick();
};
}).call(this,require('_process'))
},{"./switchery.css":3,"_process":1}],5:[function(require,module,exports){
'use strict';

var Switchery = require('switchery');

//
// Switches
// --------------------------------------------------

// Small
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-small'));

elems.forEach(function (html) {
	var switchery = new Switchery(html, { size: 'small', color: '#3897ff' });
});

// Normal
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function (html) {
	var switchery = new Switchery(html, { color: '#3897ff' });
});

// Large
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-large'));

elems.forEach(function (html) {
	var switchery = new Switchery(html, { size: 'large', color: '#3897ff' });
});

//
// Ripple effect on buttons
// --------------------------------------------------

$(document).ready(function () {
	$('.btn').click(function () {
		$(this).addClass('ripple');
		setTimeout(function () {
			$('.btn').removeClass('ripple');
		}, 500);
	});
});

$(document).ready(function () {
	var hamburger = $('.hamburger-icon');
	hamburger.click(function () {
		hamburger.toggleClass('active');
		return false;
	});
});

//open search form
$('.innova-navbar-search-trigger').on('click', function (event) {
	event.preventDefault();
	toggleSearch();
	closeNav();
});

function toggleSearch(type) {
	if (type == "close") {
		//close serach
		$('.innova-navbar-search').removeClass('is-visible');
		$('.innova-navbar-search-trigger').removeClass('search-is-visible');
		$('.innova-navbar-overlay').removeClass('search-is-visible');
	} else {
		//toggle search visibility
		$('.innova-navbar-search').toggleClass('is-visible');
		$('.innova-navbar-search-trigger').toggleClass('search-is-visible');
		$('.innova-navbar-overlay').toggleClass('search-is-visible');
		if ($(window).width() > MqL && $('.innova-navbar-search').hasClass('is-visible')) $('.innova-navbar-search').find('input[type="search"]').focus();
		$('.innova-navbar-search').hasClass('is-visible') ? $('.innova-navbar-overlay').addClass('is-visible') : $('.innova-navbar-overlay').removeClass('is-visible');
	}
}

//
// Smooth Page Scrolling
// --------------------------
$(document).ready(function () {
	$(function () {
		$('.page-scroll').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 70
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
});

},{"switchery":4}],6:[function(require,module,exports){
//
// Flickity JS
// --------------------------------------------------

'use strict';

$(document).ready(function () {

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

},{}],7:[function(require,module,exports){
'use strict';

$(window).load(function () {
  //
  // Shuffle Portfolio
  // --------------------------

  /* initialize shuffle plugin */
  var $grid = $('.portfolio-grid-shuffle-1');

  if ($('.portfolio-grid-shuffle-1').length <= 0) {
    return;
  }

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
    $grid.shuffle('shuffle', groupName);
  });
});

},{}]},{},[6,5,7]);
