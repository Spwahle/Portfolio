'use strict';

var app = app || {};
// function designed to hide my main sections and show my project section
(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('.hero-container').hide();
    $('#article').hide();
    $('.reduce').hide();
    $('.projects').show();
    $('#projects').show();
  };

  module.projectController = projectController;
})(app);
