
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/user/repos',
      method: 'GET'
    }).then(function(data) {
      repos.all = data;
      localStorage.rawData = JSON.stringify(data);
      app.Project.loadAll(data);
      callback();
    })
  }

  module.repos = repos;
})(app);
