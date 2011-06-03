$(document).ready(function() {
  // normal navigation
  $('#nav-welcome').click(function() {
    $.scrollTo('#welcome', 2500);
  });
  $('#nav-events').click(function() {
    $.scrollTo('#events', 2500);
  });
  $('#nav-tweets').click(function() {
    $.scrollTo('#tweets', 2500);
  });
  $('#nav-lyrics').click(function() {
    $.scrollTo('#lyrics', 2500);
  });
  $('#nav-photos').click(function() {
    $.scrollTo('#photos', 2500);
  });
  $('#nav-videos').click(function() {
    $.scrollTo('#videos', 2500);
  });
  
  // demo mode auto scrolling
  $('#demo-mode-toggle').click(function() {
    console.log('demo mode now on');
    var screens = [
      '#welcome',
      '#events',
      '#tweets',
      '#lyrics',
      '#photos',
      '#videos'
    ];
    var i = 0;
    var update = function() {
      $.scrollTo(screens[i], 2500);
      i = i + 1;
      if(i == 6) {
        i = 0;
      }
    };
    var runDemo = function() {
      setInterval(update, 5000);
    };
    runDemo();
  });
});