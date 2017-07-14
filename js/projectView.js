'use strict';

//Configuring a view object to hold functions for updates and related event handlers
var projectView = {};

//handleMainNav is a function created to handle hiding the content on click events

// projectView.handleMainNav = function() {
//   $('.main-nav').on('click', '.tab', function() {
//     $('.hero-container').hide();
//     $('.tab-content').hide();
//     $('.' + $(this).data('content')).show();
//     $('.template').hide();
//   });
// };

projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.Read More', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read More') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read More');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
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
