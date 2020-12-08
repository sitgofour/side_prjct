const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const { Resource } = require('./database/Resource.js');
const { connectToDB } = require('./database/connect.js');

const DB = connectToDB();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.get('/pageLoad', function (req, res) {
  res.send('Hello World')
});

app.post('/newResource', function (req, res) {
  // give this resource object to separate function that send to db
    const newResource = new Resource({
      title: req.body.newTitle,
      link: req.body.newLink,
      description: req.body.newDescription
    });

    res.send('got the new resource!');
})
 
app.listen(8000, () => {
    console.log('server listening on port 3000');
});
