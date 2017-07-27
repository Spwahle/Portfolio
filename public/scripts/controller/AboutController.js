'use strict';

var app = app || {};
// function designed to hide my main sections and show my about section
(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.hero-container').hide();
    $('.projects').hide();
    $('.about-me').show();
  };

  module.aboutController = aboutController;
})(app);
