'use strict';
var app = app || {};

(function(module) {

  var projectView = {};

  function hamburgerClick() {
    $('.icon-menu').on('click', function() {
      $('nav').toggleClass('toggle');
    });
  }

  projectView.initNewProjectPage = function() {
    $('.tab-content').show();

    $('#export-field').hide();
    $('project-json').on('focus', function() {
      this.select();
    });

    $('#new-form').on('change', 'input, textarea', projectView.create);
  }

  projectView.create = function() {
    var project = app.repos.all;
    $('#projects').empty();

    $('#projects').append(project.toHtml());

    $('#export-field').show();
    $('#project-json').val(JSON.stringify(project) + ',');
  }

  projectView.initIndexPage = function() {
    hamburgerClick();
  }

  module.projectView = projectView;
} (app));
