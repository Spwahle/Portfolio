'use strict';

 let express = require('express');
 let app = express();
  const bodyParser = require('body-parser').urlencoded({extended: true});
  const PORT = process.env.PORT || 3000;


 app.use(express.static('./public'));



 @@ -23,5 +27,6 @@ app.post('/articles', bodyParser, function(request, response) {
  })

  app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
  });
