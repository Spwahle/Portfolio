'use strict';

var app = app || {};

(function(module) {
  function Project(rawDataObj) {
    this.projectName = rawDataObj.projectName;
    this.description = rawDataObj.description;
    this.siteUrl = rawDataObj.siteUrl;
    this.repoUrl = rawDataObj.repoUrl;
  }

  Project.prototype.toHtml = function() {
    var template = $('#project-overlay').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  var template = $('#project-overlay').html();
  let render = Handlebars.compile(template);

  Project.loadAll = function(rawData) {
    $('#projects').append(rawData.map(render));
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      app.projectView.initIndexPage();
      $('.hero-container').show();
      $('.about-me').show();
    } else {
      app.repos.requestRepos(app.projectView.initIndexPage);
    }
  }

  module.Project = Project;
} (app));
