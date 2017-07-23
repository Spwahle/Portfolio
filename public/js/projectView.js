'use strict';

var projectView = {};
//A function that is handling the tab click on main nav. For each item that has a class that is clicked the rest will be hidden
projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.hero-container').hide();
    $('.tab-content').hide();
    $('.' + $(this).data('content')).show();
    $('.template').hide();
  });
};
//this function holds a on event handler that when clicked will toggle nav to toggle
function hamburgerClick() {
  $('.icon-menu').on('click', function() {
    $('nav').toggleClass('toggle');
  });
}

//this function will
projectView.initNewProjectPage = function() {
  $('.tab-content').show();

  $('#export-field').hide();
  $('project-json').on('focus', function() {
    this.select();
  });

  $('#new-form').on('change', 'input, textarea', projectView.create);
}

projectView.create = function() {
  var project;
  $('#projects').empty();

  project = new Project({
    projectName: $('#project-title').val(),
    description: $('#project-description').val(),
    siteUrl: $('#project-url').val(),
    siteRepo: $('#project-repo').val()
  });

  console.log(this.siteRepo);

  $('#projects').append(project.toHtml());

  $('#export-field').show();
  $('#project-json').val(JSON.stringify(project) + ',');
}


projectView.initIndexPage = function() {
  hamburgerClick();
  projectView.handleMainNav();
}
