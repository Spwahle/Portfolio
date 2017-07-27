'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('.hero-container').hide();
    $('.projects').hide();
    $('#projects').hide();
    $('.reduce').hide();
    $('.about-me').show();
  };

  module.aboutController = aboutController;
})(app);
