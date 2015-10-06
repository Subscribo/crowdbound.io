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