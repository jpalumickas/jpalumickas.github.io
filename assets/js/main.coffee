$('.social-links li a').on 'click', ->
  analytics.track("Clicked on #{$(this).attr('title')}")
