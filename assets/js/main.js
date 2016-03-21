$(document).ready(function() {
  $('.social-links li a').on('click', function() {
    var title = $(this).attr('title');
    analytics.track('Clicked on ' + title);
  });
});
