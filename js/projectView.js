'use strict';

//Configuring a view object to hold functions for updates and related event handlers
var projectView = {};

//handleMainNav is a function created to handle hiding the content on click events

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.' + $(this).data('content')).show();
    $('.template').hide();
  });
};
//hamburgerClick is created to allow it show the icon menu when clicked

function hamburgerClick() {
  $('.icon-menu').on('click', function() {
    $('nav').toggleClass('toggle');
  });
}
//Loads the two functions once the DOM is loaded

$(document).ready(function() {
  hamburgerClick();
  projectView.handleMainNav();
});
