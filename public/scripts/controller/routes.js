'use strict';

var app = app || {};
//using page.js to redirect to different urls
page('/projects', app.projectController.index);
page('/about', app.aboutController.index);
page('/home', app.Project.fetchAll);

page();
