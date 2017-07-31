'use strict';

var app = app || {};

page('/projects', app.projectController.index);
page('/about', app.aboutController.index);
page('/home', app.Project.fetchAll);

page();
