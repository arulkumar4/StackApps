// ==UserScript==
// @name        Leagues Top Pagination
// @namespace   http://stackexchange.com/users/2855348/arulkumar
// @author      Arulkumar
// @description Moving the bottom pagination to the top of the user list
// @match       *://stackexchange.com/leagues/*
// @version     1.0
// @grant       none
// ==/UserScript==
(function ($) {
  $(document).ajaxComplete(function (event, request, settings) {
    $('#leagueUserList .league-container')
      .first()
      .css('border-top', '1px solid #F0F0F0');
    
    $('#leagueUserList')
      .prepend($('#leagueUserList .pager').clone())
      .prepend($('#leagueUserList .page-sizer').clone());
  });
}(jQuery));
