'use strict';

const ProjectView = {};


ProjectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

ProjectView.setTeasers = function() {
  $('.Project-body *:nth-of-type(n+2)').hide();
  $('Project').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.Project-body *:nth-of-type(n+2)').hide();
    }
  });
};

ProjectView.create = function() {
  let Project;
  $('#Projects').empty();


ProjectView.initIndexPage = function() {
  Project.all.forEach(function(Project) {
    $('#Projects').append(Project.toHtml())
  });

  ProjectView.handleMainNav();
  ProjectView.setTeasers();
};
