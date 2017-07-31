'use strict';

var app = app || {};

page('/projects', app.projectController.index);
page('/about', app.aboutController.index);
page('/home', app.Project.fetchAll);

page();



var my_handlers = function (nodes) {
var helper = function (i) {
  return function (e) {
    alert(i);
  };
};
var x;
for (x = 0; x < nodes.length; x++) {
  jQuery(nodes[x]).on(‘click’, helper(x));
}
};

var my_handlers = function (nodes) {
  var helper = function (i) {
    return function (e) {
      alert(i);
    };
  };
  var x;
  for (x = 0; x < nodes.length; x++) {
    jQuery(nodes[x]).on(‘click’, helper(x));
  }
};
