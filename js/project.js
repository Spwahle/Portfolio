'use strict';

function Project(rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteURL = rawDataObj.siteURL;
  this.repoURL = rawDataObj.repoUrl;
}


Project.all = [];

Project.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-overlay').text());

  var template = $('#my-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a, b) {
    return (new Date(b.date)) - (new Date(a.date));
  });

  rawData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  });
}
// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Project.fetchAll = function() {
    if (localStorage.rawData) {
      //parsing the data to found in rawData that and loading it into local storage
      Project.loadAll(JSON.parse(localStorage.rawData));
      //calling initIndexPage function found in the ProjectView which loops through Projects and appends them to #Project
      ProjectView.initIndexPage()
    } else {
      //grabbing JSON data
      $.getJSON('./data/data.json')
        //creating a then function promise?!?! I don't really understand this
        .then(function(data) {
            //pulling raw data from localStorage and stringify it for use to append
            localStorage.rawData = JSON.stringify(data)
            //instantiate the Projects
            Project.loadAll(JSON.parse(localStorage.rawData)
                //appending to #Projects again
                initIndexPage()
              },
              function(err) {
                console.error('Error: ' + err);
              });
        }
    };

    function initIndexPage() {
      Project.all.forEach(function(project) {
        $('#projects-section').append(project.toHtml());
      });
    }
