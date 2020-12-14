const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const { connectToDB } = require('./database/connect.js');
const { postNewResourceToDB, queryAllResources } = require('./database/databaseOps.js');

const { runPopulate } = require('./database/populateDB.js');
const { getResourceMetaData } = require('./helpers/getResourceMetaData.js');


// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/pageLoad', function(req, res) {
  res.send('Hello World')
});

app.get('/getAllResources', async function(req, res) {
  const dbResponse = await queryAllResources();
  console.log("response here: ", dbResponse);
  res.send(dbResponse);
});

app.post('/newResource', function (req, res) {

    const newResource = {
      title: req.body.title,
      description: req.body.description,
      categories: req.body.category,
      resourceUrl: req.body.resourceUrl,
    };
    
    postNewResourceToDB(newResource);
    res.send('got the new resource!');
})
 
app.listen(8000, () => {
    console.log('server listening on port 8000');
});


// runPopulate();
// getResourceMetaData("https://www.youtube.com/watch?v=pAfnia7-rMk");
// getResourceMetaData("https://youtu.be/pAfnia7-rMk");


