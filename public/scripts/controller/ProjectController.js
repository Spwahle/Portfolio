'use strict';

var app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = () => {
    $('.hero-container').hide();
    $('#article').hide();
    $('.projects').show();
    $('#projects').show();
  };

  module.projectController = projectController;
})(app);
