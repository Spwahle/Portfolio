'use strict';
//Reworked hamburger button for a click function. Toggle will set display to block and none

//declaring global variable
var projects = [];

//constructor function building out objects
function Project(rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteUrl = rawDataObj.siteUrl;
  this.repoUrl = rawDataObj.repoUrl;
}

//prototype function that creates a deeo copy stored as $newProject, removes the class of template
//finds the decendants of project-title-overlay and adds projectName attribute to it. Finally returning the var that we built
Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');

  $newProject.find('.project-title-overlay h2').html(this.projectName);
  $newProject.find('.project-description').html(this.description);
  $newProject.find('.link a').attr('href', this.siteUrl);
  $newProject.find('.repo a').attr('href', this.repoUrl);


  return $newProject;
};

//this will loop through my raw data and forEach it will push the Project objects
rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});
//finall this will append each object to my id projects in html format
projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.' + $(this).data('content')).show();
    $('.template').hide();
  });
};

function hamburgerClick() {
  $('.icon-menu').on('click', function() {
    $('nav').toggleClass('toggle');
  });
}

$(document).ready(function() {
  hamburgerClick();
  projectView.handleMainNav();
});
