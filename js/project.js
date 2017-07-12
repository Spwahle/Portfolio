'use strict';

$('.icon-menu').on('click', function() {
  $('nav').toggle();
});

var projects = [];

function Project(rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteUrl = rawDataObj.siteUrl;
  this.repoUrl = rawDataObj.repoUrl;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');

  $newProject.find('.project-title-overlay h2').html(this.projectName);

  return $newProject;
};

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
