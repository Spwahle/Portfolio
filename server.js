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
