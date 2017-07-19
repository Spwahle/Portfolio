
'use strict';

//declaring empty array to fill later
var projects = [];

//Creating object with four attributes
function Project(rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteUrl = rawDataObj.siteUrl;
  this.repoUrl = rawDataObj.repoUrl;
}

//prototype method that handles and renders Handlebars
Project.prototype.toHtml = function() {
  var template = $('#project-overlay').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

//function that iterates through raw data and pushes them to object constructor, THEN appends them to the html ID Projects
Project.loadAll = function(rawData) {
  rawData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });

  projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
}

//This function checks local stoarage to see if JSON items are loaded. If they are it will pull from it and build the index page
Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
//if local data isn't already there, I'm grabbing the JSON from the rawData.json file, then calling a then promise, which
//we then stringify the JSON data in local storage then building the index page
  } else {
    $.getJSON('./data/rawData.json')
    .then(function(data) {
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(data);
      projectView.initIndexPage();
    }, function(err) {
      console.error('my stuff broke:', err);
    });
  }
}
