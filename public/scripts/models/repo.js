var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      headers: {'Authorization': `token ${GITHUB_TOKEN}`},
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
