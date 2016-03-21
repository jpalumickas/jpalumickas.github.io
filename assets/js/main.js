---
---

$(document).ready(function() {
  $('.social-links li a').on('click', function() {
    let title = $(this).attr('title');
    analytics.track(`Clicked on ${title}`);
  });
});
