'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/*', function(req, res) {
  res.sendFile('./index.html', { root: './public'});
});

app.get('/new', function(req, res) {
  res.sendFile('./new.html', {root: './public'});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
