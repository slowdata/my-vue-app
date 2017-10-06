const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./routes/routes.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

routes(app);

var server = app.listen(3000, () => {
  console.log('app running on port.', server.address().port);
});

