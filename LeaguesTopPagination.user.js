// ==UserScript==
// @name        Leagues Top Pagination
// @namespace   https://stackexchange.com/users/2855348/arulkumar
// @author      Arulkumar
// @description Clone the bottom pagination and paste to the top of the user list in Stack Exchange Leagues
// @match       *://stackexchange.com/leagues/*
// @version     1.1
// @grant       none
// ==/UserScript==
(function ($) {
  $(document).ajaxComplete(function (event, request, settings) {

    if($('#leagueUserList .page-sizer').length > 1)
      $('#leagueUserList .page-sizer').first().remove();

    if($('#leagueUserList .pager').length > 1)
      $('#leagueUserList .pager').first().remove();

    if($('#leagueUserList .page-sizer').length >= 1)
      $('#leagueUserList .league-container').first().css('border-top', '1px solid #F0F0F0');

    $('#leagueUserList')
      .prepend($('#leagueUserList .pager').clone())
      .prepend($('#leagueUserList .page-sizer').clone());
    
  });
}(jQuery));
