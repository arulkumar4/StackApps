// ==UserScript==
// @name        Combined Network Reputation
// @namespace   https://stackexchange.com/users/2855348/arulkumar
// @description Combined Stack Exchange Network Reputation
// @include     https://stackexchange.com/users/*?tab=accounts
// @version     1.0
// @grant       none
// ==/UserScript==
(function ($) {
  $(document).ajaxComplete(function (event, request, settings) {

   if($('#totalReputation').length === 0) {
    var totalRep = 0;
    $('.account-container').each(function(){
     var repHtml = ''; 
     var siteRep = 0;
     repHtml = $(this).find('.account-number').first().html();
     siteRep = parseInt(repHtml.replace(/,/g, ""));
     if (siteRep > 200) 
      totalRep += siteRep;
    });
		
   if (totalRep > 0)
    $('.network-items').append("<span class='icon-achievements'><span id='totalReputation' class='unread-count'>" + totalRep + "</span></span>");
  }
  });
}(jQuery));
