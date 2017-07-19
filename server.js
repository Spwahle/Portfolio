'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;


 app.use(express.static('./public'));



 app.post('/project', bodyParser, function(request, response) {
  })

  app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
  });
  'use strict';

  // const express = require('express');
  // const app = express();
  // const PORT = process.env.Port || 8080;
  //
  // app.use(express.static('./public'));
  //
  // app.get('/', function(req, rest) {
  //   console.log('whats up');
  //   res.sendFile('./index.html');
  // });
  //
  // app.get('/new', function(req, rest) {
  //   res.SendFile('./new.html', {root: './public'});
  // });
  //
  // app.listen(PORT, function() {
  //   console.log('Current Port Number:', PORT);
  // });
