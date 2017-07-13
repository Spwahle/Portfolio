'use strict';
'use strict';

 var projectView = {};

 projectView.handleMainNav = function() {
   $('.main-nav').on('click', '.tab', function() {
     $('.hero-container').hide();
     $('.tab-content').hide();
     $('.' + $(this).data('content')).show();
     $('.template').hide();
    });
  };

 +function hamburgerClick() {
 +  $('.icon-menu').on('click', function() {
 +    $('nav').toggleClass('toggle');
 +  });
 +}
 +
 +$(document).ready(function() {
 +  hamburgerClick();
 +  projectView.handleMainNav();
 +});
