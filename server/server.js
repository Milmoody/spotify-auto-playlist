const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// use a json body parser
app.use(bodyParser.json());

// app.use('/', express.static(path.join(__dirname, '../client/scss')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


// Listen for requests on PORT 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});
module.exports = app;
