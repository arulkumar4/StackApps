// ==UserScript==
// @name        Clone the tags in Questions page
// @namespace   https://stackexchange.com/users/2855348/arulkumar
// @author      Arulkumar
// @description Clone the tags below the post title, if the tags are not visible in offset window
// @match       *://*.askubuntu.com/questions/*
// @match       *://*.mathoverflow.net/questions/*
// @match       *://*.serverfault.com/questions/*
// @match       *://*.stackapps.com/questions/*
// @match       *://*.stackexchange.com/questions/*
// @match       *://*.stackoverflow.com/questions/*
// @match       *://*.superuser.com/questions/*
// @exclude     *://api.stackexchange.com/*
// @exclude     *://stackoverflow.blog/*
// @exclude     *://data.stackexchange.com/*
// @exclude     *://elections.stackexchange.com/*
// @exclude     *://stackexchange.com/*
// @version     1.0
// @grant       none
// ==/UserScript==
(function ($) {
  $(document).ajaxComplete(function (event, request, settings) {

  if(($(window).height() - $(".post-taglist").offset().top) < 0) 
      $("#mainbar").prepend($('.post-taglist').clone());
			
  if($('.post-taglist').length > 1) 
      $('.post-taglist').first().css('margin-left', '58px');
    
  });
}(jQuery));
